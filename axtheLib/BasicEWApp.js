
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon')

const multer = require('multer');
const upload = multer()

const livereload = require('livereload')

// /////////////////////////////////////////////

module.exports =  class BasicEWApp { // express web app

  eapp // express js app

  constructor() {
	console.log(this.constructor.name,'node version:',JSON.stringify(process.versions.node))
	this.eapp = express();

	// view engine setup
	this.eapp.set('views', 'public');
	this.eapp.set('view engine', 'pug');
	this.eapp.use(favicon('public/favicon.ico'))
	this.eapp.use('*/favicon.ico', express.static('public/favicon.ico'))

	this.eapp.use(express.urlencoded({ extended: true }))
	this.eapp.use(express.json({ extended: true }))
	this.eapp.use(cookieParser())

	this.eapp.use(upload.array())

	this.eapp.use(express.static('public'))

	// reload a page, not nodemon
	//var relos = livereload.createServer({'exts':['pug', 'css', 'js', 'png', 'gif', 'jpg']})
	// comment out livereload to disable for production:
	//relos.watch( process.cwd() + "/public")

  }//()

  // must be called at end
  finalPrep(port) {
	// catch 404 and forward to error handler
	this.eapp.use(function(req, res, next) {
	  next(createError(404))
	});

	// error handler
	this.eapp.use(function(err, req, res, next) {
			console.log('error', err)

	  res.locals.message = err.message
	  res.locals.error =  err

	  // render the error page
	  res.status(err.status || 500)
	  res.render('error')
	})

	this.eapp.listen(port) // listen on this port

	console.log(this.constructor.name, 'Serving:', process.cwd() + '/public')
	console.log(this.constructor.name, 'ready, you can now open browser at:', port)
  }//()

}
