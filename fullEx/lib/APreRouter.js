
// const validate = require("validate.js")

// ////////////////////////////////
const BasicPreRouter = require('axthe/BasicPreRouter.js')
const BasicBModel     = require('axthe/BasicBModel.js')

module.exports =  class APreRouter extends BasicPreRouter {// pug pre render. Most pages don't need a pre render, but some do

  constructor(eapp) {
    super(eapp)// call base and pass app, so it knows

    this.bmodel = new BasicBModel()

	this.firstPrep()

	this.finalPrep()

  }//()




}//class

