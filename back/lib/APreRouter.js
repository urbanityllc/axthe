
// const validate = require("validate.js")

// ////////////////////////////////
const BasicPreRouter = require('axthe/BasicPreRouter.js')
const BasicMData     = require('axthe/BasicMData.js')

module.exports =  class APreRouter extends BasicPreRouter {// pug pre render. Most pages don't need a pre render, but some do

  constructor(eapp) {
    super(eapp)// call base and pass app, so it knows

    this.fdata = new BasicMData()


    /* setup your routes, eg:
    this.eapp.post('/form', function(req, res) {
      console.log(this.constructor.name,req.body)
      res.send("recieved your request!")
    })
    */


    this.finalPrep()

  }//()




}//class

