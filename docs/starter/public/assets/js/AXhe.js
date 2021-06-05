

// helper for boilerplate
// based on http://developers.google.com/web/fundamentals/web-components/customelements
// and http://docs.ficusjs.org
export class AXhe { 

	el // element handle
	
	constructor(el_) {
		this.el = el_
	}

	/**
	* A helper method
	* @param template 
	*/
	setup(template) {
		const cTemp = document.createElement('template')
		cTemp.innerHTML = template
  
		this.el.sr = this.el.attachShadow({ mode: 'open' })
		this.el.sr.appendChild(cTemp.content.cloneNode(true))
	 }//cons

	query(sel) {
		return this.el.sr.querySelector(sel)
	}

	getSlotElById(id) {
		let ret
		this.getSlotEls.map(function(n){
		   if(n.id==id) ret = n
		})
		return ret
	 }
	 
	/**
	 * Get elements in a slot
	 */
	getSlotEls() {
		// https://javascript.info/slots-composition
		return this.el.sr.querySelector('slot').assignedElements()
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
}// class
console.log('loaded')