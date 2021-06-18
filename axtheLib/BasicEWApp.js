
const express = require('express')
const cookieParser = require('cookie-parser')
const favicon = require('serve-favicon')
const httpLogger = require('morgan')

const reload = require('reload')
const chokidar = require('chokidar')
const interceptor = require('express-interceptor')
const cheerio     = require('cheerio')

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
				return /text\/html/.test(res.get('Content-Type'));
			},
			// Appends a paragraph at the end of the response body
			intercept: function(body, send) {
				var $document = cheerio.load(body);
				$document('body').append('<p>From interceptor!</p>');
			
				send($document.html());
			}
		}
	})
	this.eapp.use(inter)
}//()

// must be called at end
finalPrep(port) {

	// error handler
	this.eapp.use(function(err, req, res, next) {
		console.log('error:::', err)

		res.locals.message = err.message
		res.locals.error =  err

		// render the error page
		res.status(err.status || 500)
		res.render('error')
	})

	// reload of public 
	reload(this.eapp).then((reloadReturned)=> {
		console.log('h')

		this.eapp.listen(port) // listen on this port
		console.log(this.constructor.name, 'Serving:', process.cwd() + '/public')
		console.log(this.constructor.name, 'WAPP ready, you can now open browser at:', port)

		reloadReturned.reload()
		chokidar.watch('./public').on('change', (event, path) => {
			console.log(event)
			reloadReturned.reload()
		})


	}).catch(function (err) {
		console.error('Reload could not start, could not start server app', err)
	})

}//()

}
