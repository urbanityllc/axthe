
import { AXutil } from '/assets/js/AXutil.js';

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
	`;

	sr // shadow root handle
	// bolierplate
	
	constructor() {
		super()
		// compoistion helper to handle boiler plate
		this.ax = new AXutil(this)
		this.ax.setup(this.template) // just a helper function for boiler plate
		this._getData()
	}

	_getData= () => { // example of course
		fetch('https://jsonplaceholder.typicode.com/todos/1')
  			.then(this.render('World'))
	}

	render= (arg) => {
		let n = this.ax.query('#p123')
		console.log(n)
		n.innerHTML=`Hello ${arg}` // es string template
	}

}//class
customElements.define('my-comp', MyComp)
console.log('loaded')