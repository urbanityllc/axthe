
import { createCustomElement } from '@ficusjs/core/dist/custom-element.mjs'
import { html, renderer } from '@ficusjs/renderers/dist/uhtml.mjs'

createCustomElement('hello-world', {
	created () {
		console.log('oh hi')
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(response => response.json())
			.then(json => console.log(json))
	},
	renderer,
	handleClick () {
		window.alert('Hello to you!')
	},
	render () {
		return html`
		<div>
			<p>FicusJS hello world</p>
			<button type="button" onclick="${this.handleClick}">Click me</button>
			${this.slots.default}
		</div>
	`
	}
})