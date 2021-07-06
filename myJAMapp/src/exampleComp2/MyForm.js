
import { createCustomElement } from 'ficusjs/custom-element'
import { html, renderer } from '@ficusjs/renderers/htm'

// https://github.com/axthe/committers/blob/8d3f7c9ee39de7d804de3b086bfbfb4305c24c16/axtheLib/CDN/js/AXslotHe.js

createCustomElement('my-form', {
	mounted () {
		console.log('oh hi')
		const but1 = document.getElementById('but1')
		but1.addEventListener("click", (e) => {
			e.preventDefault()
			console.log(e)

			const data = {}
			const fdata = new FormData(document.getElementById('form1'))
			for (var [key, value] of fdata.entries()) {
				data[key] =value;
			}

			fetch("/wapi/email",
				{ method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				}).then(res => {
					console.log('status ', res.statusText)
				})
		})

	},
	renderer,
	handleClick () { },

	render () {
		return html`
		<form id='form1'>
			${this.slots.default}
		</form>
	`
	}
})
