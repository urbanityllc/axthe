// based on https://developers.google.com/web/fundamentals/web-components/customelements
export class MyComp extends HTMLElement {

	template = `<b>I'm a Cust. El</b>
	<slot></slot>`;

	constructor() {
		super()
		this._setup(this.template) // just a helper function for boiler plate.
	}

	// bolierplate: /////////////////
	sr // shadow root handle

   /**
	* A helper method
	* @param template 
	*/
	_setup(template) {
		const cTemp = document.createElement('template')
		cTemp.innerHTML = template
  
		this.sr = this.attachShadow({ mode: 'open' })
		this.sr.appendChild(cTemp.content.cloneNode(true))
	 }//cons

	//- eg addScript('bla.js', null, 'api-key', 'key123') when they want you to use the tag: so you can in your own sequence
	_addScript(src, callback, attr, attrValue, id) {
		var s = document.createElement('script')
		s.setAttribute('src', src)
		if (attr) s.setAttribute(attr, attrValue)
		if (id) s.id = id
		if (callback) s.onload = callback
		s.async = false 
		document.getElementsByTagName('head')[0].appendChild(s)
	};

	_getSlotElById(id) {
		let ret
		this.slotEls.map(function(n){
		   if(n.id==id) ret = n
		})
		return ret
	 }
	 
	 /**
	  * Get elements in a slot
	  */
	_getSlotEls() {
		// https://javascript.info/slots-composition
		return this.sr.querySelector('slot').assignedElements()
	}   
  
}
customElements.define('my-comp', MyComp)
console.log('loaded')