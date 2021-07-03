
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@3/htm'
import { createCustomElement } from 'https://cdn.skypack.dev/ficusjs@3/custom-element'

createCustomElement('hello-world', {
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