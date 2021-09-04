import { createCustomElement } from '@ficusjs/core/dist/custom-element.mjs'
import { html, renderer } from '@ficusjs/renderers/dist/uhtml.mjs'

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
	props: {
		ep: {
			type: String,
			required: true
		}
	},
	onSubmit (e) {
		e.preventDefault()
		const data = Object.fromEntries(new FormData(e.target).entries())
		console.log(data, this.props.ep )
		fetch(this.props.ep, // gets the attribute
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
