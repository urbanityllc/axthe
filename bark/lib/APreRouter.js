
// ////////////////////////////////
const BasicPreRouter = require('axthe/BasicPreRouter.js')
const AnBModel     = require('./AnBModel.js')

module.exports =  class APreRouter extends BasicPreRouter {// pug pre render. Most pages don't need a pre render, but some do

	constructor(eapp) {
		super(eapp)// call base and pass the express app, so it knows

		this.bmodel = new AnBModel() // the model is used for data, validation, business layer and such. You would of course extends BasicBModel
	
		// to finish setup
		this.finalPrep()
	}//()

}//class

