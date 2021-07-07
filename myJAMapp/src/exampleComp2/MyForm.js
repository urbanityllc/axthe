
import { createCustomElement } from 'ficusjs/custom-element'
import { html, renderer } from '@ficusjs/renderers/htm'

// https://github.com/axthe/committers/blob/8d3f7c9ee39de7d804de3b086bfbfb4305c24c16/axtheLib/CDN/js/AXslotHe.js

createCustomElement('my-form', {
	render () {
		return html`
		<form onsubmit="${this.onSubmit}">
		<fieldset>
			${this.slots.default}
		</fieldset>
		</form>
	`
	},
	onSubmit (e) {
		e.preventDefault()
		const data = Object.fromEntries(new FormData(e.target).entries())
		console.log(data)
		fetch("/wapi/email",
			{ method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then(res => {
				console.log('status ', res.statusText)
			})
	},
	renderer
})
