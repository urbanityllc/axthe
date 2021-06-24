'use strict';


// ////////////////////////////////
const BasicPreRouter = require('axthe/BasicPreRouter.js')
// const MyBModel     = require('./MyBModel.js')

module.exports =  class APreRouter extends BasicPreRouter {// pug pre render. Most pages don't need a pre render, but some do

	constructor(eapp) {
		super(eapp)// call base and pass the express app, so it knows

		//this.bmodel = new MyBModel() // the model is used for data, validation, business layer and such. You would of course extends BasicBModel
	
		this.firstPrep()
		
		// the route loads the data
		this.eapp.get('/1data', (req, res) => {
			res.render(this.getPath(req), {title: 'My name is Vic'})
		})

		this.eapp.post('/form', (req, res) => {
			console.log(this.constructor.name, req.body)
			res.send("received your request!")
		})

		// to finish setup
		this.finalPrep()
	}//()

}//class

