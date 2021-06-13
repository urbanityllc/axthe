

// ////////////////////////////////
const BasicPreRouter = require('axthe/BasicPreRouter.js')
const BasicBModel     = require('axthe/BasicBModel.js')

const multer  = require('multer')
const path = require('path')
const fs = require('fs')


module.exports =  class APreRouter extends BasicPreRouter {// pug pre render. Most pages don't need a pre render, but some do

  constructor(eapp) {
	super(eapp)// call base and pass app, so it knows

	this.bmodel = new BasicBModel()

	this.bmodel.cloneFolder('mix', 'mix1')

	this.firstPrep()
	
	/*
	console.log(fm.getTxt('1o','.c1'))
	console.log(fm.getImg('team/a_marietta','.team'))
	console.log(fm.getFolders('team'))
	*/

	// upload example from /upImgPg
	
	// should be in model!!!!!
	const storage = multer.diskStorage({
		destination: function (req, file, cb) {
		  cb(null, 'uploads')
		},
		filename: function (req, file, cb) {
		  cb(null, file.fieldname + '-' + Date.now())
		}
	})
	const upload = multer({ storage: storage,  preservePath: true })
	
	this.eapp.post('/api/upImg', upload.single('img1'), (req,res) =>{
		console.log(req.file)
	})
	
	this.eapp.post('/form', (req, res) => {
	  console.log(this.constructor.name,req.body)
	  res.send("recieved your request!")

	})

	this.finalPrep()

  }//()

}//class

