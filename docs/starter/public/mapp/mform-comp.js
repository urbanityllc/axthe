
import { EventBusSingleton } from '/assets/js/leb/index.js'
// https://cdn.jsdelivr.net/npm/axthe@0.0.26/CDN/js/leb/index.min.js

// based on http://developers.google.com/web/fundamentals/web-components/customelements
import { AXhe } from '/assets/js/AXhe.js' // helper for boilerplate
// https://cdn.jsdelivr.net/npm/axthe@0.0.26/CDN/js/AXhe.min.js

// http://html.spec.whatwg.org/multipage/custom-elements.html
// http://component.kitchen/blog/posts/writing-a-web-component-that-wraps-a-standard-html-element-might-alleviate-the-need-for-is-syntax
// http://developers.google.com/web/fundamentals/web-components/customelements

// extension / customized native element:
export class MyForm extends HTMLElement {

	template = `
	<style>
		:host{
			color: blue;
		}
	</style
	<b>I'm a Cust. Form:</b>
	<form>
		<slot></slot>
	</form>
	`

	sr // shadow root handle used by the helper class

	constructor () {
		super()
		// boilerplate:
		this.ax = new AXhe(this)
		this.ax.setup(this.template) // helper for boilerplate

		console.log('here')
		console.log(this.ax.getSlotEls())

		// the rest of the example
		this.sr.addEventListener('click', (e) => {
			// event bus:
			EventBusSingleton.publish(this.constructor.name, e.composedPath()[0])
		 })//click
		this.getMyData()
	}

	// as opposed to pre-route, this happens post route
	getMyData =()=> { // example call of course, we did not use the data to render here
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then( response => {
				console.log('got data')
				this.myRender('World')
			})
	}//()

	myRender =(arg)=> {
		if(true) return
		let n = this.ax.query('#p123')
		console.log(n)
		n.innerHTML=`Hello ${arg}` // es string template
	}

}//class
// now register the element
customElements.define('mform-comp', MyForm)
console.log('registered')