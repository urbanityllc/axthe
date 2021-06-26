
import { EventBusSingleton } from 'https://cdn.jsdelivr.net/npm/axthe@0.1.4/CDN/js/leb/index.js'

import { AXslotHe } from 'https://cdn.jsdelivr.net/npm/axthe@0.1.4/CDN/js/AXslotHe.min.js' // helper for boilerplate

// wraps a form, need to pass attribute
export class MyForm extends HTMLElement {

	template = `
	<style>
		:host{
			color: blue;
		}
	</style
	<b>I'm a Cust. Form:</b>
	<form >
		<slot></slot>
	</form>
	`

	sr // shadow root handle used by the helper class

	constructor () {
		super()
		// boilerplate:
		this.ax = new AXslotHe(this)
		this.ax.setup(this.template) // helper for boilerplate


		// brent this get the inputs in the wraped form
		console.log(this.ax.getInputsByAttribute('mypformat'))
		// but you have to get the template to be configured with submit and other info passed on custom element

		let but = this.ax.getSlotElById('but1')
		but.addEventListener('click', (e) => {
			console.log('but')
		})

		// play
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

			})
	}//()


}//class
// now register the element
customElements.define('mform-comp', MyForm)
console.log('registered')