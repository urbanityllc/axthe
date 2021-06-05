// based on http://developers.google.com/web/fundamentals/web-components/customelements
// and http://docs.ficusjs.org

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

	constructor() {
		super()
		this.setup(this.template) // just a helper function for boiler plate
		this.getData()
	}

	getData= () => { // example of course
		fetch('https://jsonplaceholder.typicode.com/todos/1')
  			.then(this.render('World'))
	}

	render= (arg) => {
		let n = this.query('#p123')
		console.log(n)
		n.innerHTML=`Hello ${arg}` // es string template
	}

	// bolierplate: /////////////////
	el // element handle

   /**
	* A helper method
	* @param template 
	*/
	setup(template) {
		const cTemp = document.createElement('template')
		cTemp.innerHTML = template
  
		this.sr = this.attachShadow({ mode: 'open' })
		this.sr.appendChild(cTemp.content.cloneNode(true))
	 }//cons

	query(sel) {
		return this.sr.querySelector(sel)
	}

	getSlotElById(id) {
		let ret
		this.slotEls.map(function(n){
		   if(n.id==id) ret = n
		})
		return ret
	 }
	 
	 /**
	  * Get elements in a slot
	  */
	getSlotEls() {
		// https://javascript.info/slots-composition
		return this.sr.querySelector('slot').assignedElements()
	}   

	//- eg addScript('bla.js', null, 'api-key', 'key123') when they want you to use the tag: so you can in your own sequence
	addScript(src, callback, attr, attrValue, id) {
		var s = document.createElement('script')
		s.setAttribute('src', src)
		if (attr) s.setAttribute(attr, attrValue)
		if (id) s.id = id
		if (callback) s.onload = callback
		s.async = false 
		document.getElementsByTagName('head')[0].appendChild(s)
	}//()
}//class
customElements.define('my-comp', MyComp)
console.log('loaded')