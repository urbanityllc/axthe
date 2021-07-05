

import { createCustomElement } from 'ficusjs/custom-element'
import { html, renderer } from '@ficusjs/renderers/htm'


createCustomElement('my-form', {
	mounted () {
		console.log('oh hi')
		const el = document.getElementById('but1')
		console.log(el)
	},
	renderer,
	handleClick () { },

	render () {
		return html`
		<form>
			${this.slots.default}
		</form>
	`
	}
})

// https://github.com/axthe/committers/blob/8d3f7c9ee39de7d804de3b086bfbfb4305c24c16/axtheLib/CDN/js/AXslotHe.js
/*
function onMount() {

	$('#mailFrm').on('submit', function(e) {
		e.preventDefault()

			const data = {}
			const fdata = new FormData(document.getElementById('mailFrm'))
			for (var [key, value] of fdata.entries()) {
				data[key] =value;
			}
			console.log(JSON.stringify(data))

			fetch("/wapi/email",{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data),
				})
				.then(res => {
					console.log('emailing ', res.statusText)
				})

	})
}
*/