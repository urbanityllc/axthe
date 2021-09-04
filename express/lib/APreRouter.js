'use strict';

// ////////////////////////////////
const BasicPreRouter = require('axthe/BasicPreRouter.js')
// const MyBModel     = require('./MyBModel.js')

module.exports =  class APreRouter extends BasicPreRouter {// pug pre render. Most pages don't need a pre render, but some do

	routeLog = function (req, res, next) {
		console.log(req.path)
		next()
	  }

	constructor(eapp) {
		super(eapp)// call base and pass the express app, so it knows

		eapp.use(this.routeLog)

		//this.bmodel = new MyBModel() // the model is used for data, validation, business layer and such. 

		// routes!!! loads the data via SSR
		this.eapp.get('/dyn/d', (req, res) => {
			let dat = {title: 'My name is Vic'}
			this.rendr('data2/index.pug', res, dat) // notice the rend sytax!!!
		})

		// just api, REST, via JAMstack
		this.eapp.get('/api/data1', (req, res) => {
			let dat = {title: 'My name is Vic'}
			res.send(JSON.stringify(dat)) 
		})

		this.eapp.post('/api/form1', (req, res) => {
			console.log(this.constructor.name, req.body)
			res.send("OK") 
		})

	}//()

}//class

