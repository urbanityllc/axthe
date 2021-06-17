'use strict';
// ////////////////////////////////
module.exports =  class BasicPreRouter {// pug templating

	bmodel

	eapp

	constructor(eapp_) {

	  this.eapp = eapp_.eapp

	}

	firstPrep() {
	  // root only
	  this.eapp.get('/', (req, res) => {
		console.log(this.constructor.name,'is root: true' + req.baseUrl)
		res.render('index')

	  })

	}//()

	/**
	 * Must be called at end
	 */
	finalPrep() {

		// catch all for missed post
		this.eapp.post('*', (req, res) =>{
				console.log(this.constructor.name,'missed a POST', req.path.substring )
		})

	  // catch all for simple pug without args
	  this.eapp.get('*', (req, res) =>{
		res.render(req.path.substring(1)+'index.pug' )
	  })

	  console.log(this.constructor.name,'READY')

	}//()

	getPath(req) {
	  return req.path.substring(1)+'index.pug'
	}

	getExpressApp() {
		return eapp
	}

}//class
