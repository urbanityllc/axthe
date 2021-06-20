
require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const favicon = require('serve-favicon')
const httpLogger = require('morgan')

// start reload
const chokidar = require('chokidar')
const interceptor = require('express-interceptor')
const cheerio     = require('cheerio')
const ably = new require('ably').Realtime(process.env.ABLY)
const FileHound = require('filehound')
const sass = require('sass')
const fs = require('fs-extra')
// end reload

// /////////////////////////////////////////////

module.exports =  class BasicEWApp { // express web app

eapp // express js app

constructor() {
	console.log(this.constructor.name,'node version:',JSON.stringify(process.versions.node))
	this.eapp = express()

	// view engine setup
	this.eapp.set('views', 'public');
	this.eapp.set('view engine', 'pug');

	this.eapp.use(httpLogger('dev'))

	this.eapp.use(favicon('public/favicon.ico'))
	this.eapp.use('*/favicon.ico', express.static('public/favicon.ico'))

	this.eapp.use(express.urlencoded({ extended: true }))
	this.eapp.use(express.json({ extended: true }))
	this.eapp.use(cookieParser())

	this.eapp.use(express.static('public'))

	const inter = interceptor((req, res)=>{
		return {
			//  HTML responses will be intercepted
			isInterceptable: ()=>{
				return /text\/html/.test(res.get('Content-Type'))
			},
			// appends to the response body
			intercept: function(body, send) {
				var $document = cheerio.load(body)
				$document('head').prepend(`<script src="https://cdn.ably.com/lib/ably.min-1.js"></script>`)
				$document('body').append( `<script src="/reload.js" type="module"></script>`)

				send($document.html())
			}
		}
	})
	this.eapp.use(inter)
}//()


reloadCh // reload ably channel
// must be called at end
finalPrep(port) {
	this.eapp.listen(port) // listen on this port
	console.log(this.constructor.name, 'Serving:', process.cwd() + '/public')
	console.log(this.constructor.name, 'WAPP ready, you can now open browser at:', port)

	this.reloadCh = ably.channels.get('reload')
	chokidar.watch('./public').on('change', (event, path) => {
		if(event.endsWith('.scss')) this._processMainScss()
			else this.reloadCh.publish('reload','reload')

		console.log('r', event)
	})

	// error handler
	this.eapp.use(function(err, req, res, next) {
		console.log('error:::', err)

		res.locals.message = err.message
		res.locals.error =  err

		// render the error page
		res.status(err.status || 500)
		res.render('error')
	})
}//()

filehound = FileHound.create()

async _processMainScss() {
	const files = this.filehound
		.paths('./public/assets')
		.match('style.scss')
		.findSync()
	let mainScss = files[0]
	console.log(mainScss)
	if(!mainScss) return

	const res = await sass.renderSync({
		file: mainScss,
		outFile: "./public/assets/style.css",
		quietDeps: true
	})
	fs.writeFileSync("./public/assets/style.css", res.css.toString())
	console.log(res.css.toString())
	
	this.reloadCh.publish('reload','reload')
}



}
