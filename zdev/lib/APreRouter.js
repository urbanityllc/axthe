
// ////////////////////////////////
const BasicPreRouter = require('axthe/BasicPreRouter.js')
const BasicBModel     = require('axthe/BasicBModel.js')

const multer  = require('multer')

module.exports =  class APreRouter extends BasicPreRouter {// pug pre render. Most pages don't need a pre render, but some do

	constructor(eapp) {
		super(eapp)// call base and pass app, so it knows

		this.bmodel = new BasicBModel()

		//this.bmodel.cloneFolder('mix', 'mix1')

		this.firstPrep()
		
		/*
		console.log(fm.getTxt('1o','.c1'))
		console.log(fm.getImg('team/a_marietta','.team'))
		console.log(fm.getFolders('team'))
		*/

		// /////////////////////////////////////////
		// http://maximorlov.com/fix-unexpected-field-error-multer
		// you should create  storage to pass to multer in {} but implement the storage in the Model, a bit like this: http://github.com/expressjs/multer/blob/master/StorageEngine.md 
		// and put validation there, like that is an image extension.
		// likely have storage save in user's folder under ./public
		const upImg = multer({ }).single('img1')

		this.eapp.post('/upImg', (req,res) =>{
			upImg(req, res, function (err) {
				if (err ) {
					console.log(err)
		
				} else  {
					console.log(req.file)
					res.send('OK')
				}
			})
		})//()

		this.eapp.post('/form', (req, res) => {
			console.log(this.constructor.name,req.body)
			res.send("recieved your request!")

		})

		this.finalPrep()
	
	}//()


}//class

