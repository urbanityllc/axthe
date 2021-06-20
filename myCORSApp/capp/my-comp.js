
import { EventBusSingleton } from 'https://cdn.jsdelivr.net/npm/axthe@0.0.31/CDN/js/leb/index.min.js'

// based on http://developers.google.com/web/fundamentals/web-components/customelements
import { AXhe } from ' https://cdn.jsdelivr.net/npm/axthe@0.0.31/CDN/js/AXhe.min.js' // helper for boilerplate

export class MyComp extends HTMLElement {

	template = `
	<style>
		:host{
			color: red;
		}
	</style
	<b>I'm a Cust. El</b>
	<slot></slot>
	<p id='p123'>X</p>
	`

	sr // shadow root handle used by the helper class
	
	constructor () {
		super()
		// boilerplate:
		this.ax = new AXhe(this)
		this.ax.setup(this.template) // helper for boilerplate

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
		let n = this.ax.query('#p123')
		console.log(n)
		n.innerHTML=`Hello ${arg}` // es string template
	}

}//class
// now register the element
customElements.define('my-comp', MyComp)
console.log('registered')