

import { createCustomElement } from 'ficusjs/custom-element'
import { html, renderer } from '@ficusjs/renderers/htm'


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