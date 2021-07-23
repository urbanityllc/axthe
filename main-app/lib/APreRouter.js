'use strict';

// ////////////////////////////////
const BasicPreRouter = require('axthe/BasicPreRouter.js')
const path = require('path')
const fs = require('fs')
// const MyBModel     = require('./MyBModel.js')

module.exports =  class APreRouter extends BasicPreRouter {// pug pre render. Most pages don't need a pre render, but some do

	constructor(eapp) {
		super(eapp)// call base and pass the express app, so it knows

		//this.bmodel = new MyBModel() // the model is used for data, validation, business layer and such. 

		// routes!!! loads the data
		this.eapp.get('/1data', (req, res) => {
			let dat = {title: 'My name is Vic'}
			this.rend(req, res, dat) // notice the rend sytax!!!
		})

		// just api, no path
		this.eapp.get('/api/data1', (req, res) => {
			let dat = {title: 'My name is Vic'}
			res.send(JSON.stringify(dat)) 
		})

		this.eapp.get('/api/articles', (req, res) => {
			const directory = './public/articles'
			let f = [] 
			fs.readdir(directory, (err, files) => {
				files.forEach(file => {
					if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
						//console.log('Directory: ' + file);
						f.push(file);
					} 
				});
				if (req.query['articles']){
					let intersection = f.filter(x => !req.query['articles'].includes(x))
					//console.log(intersection)
					if (intersection.length) res.render('articles/' + intersection[0] + '/')
				}
				else res.render('articles/' + f[0] + '/')
			});			
		})

		this.eapp.get('/api/articles1', (req, res) => {
			console.log(req.query)
			const directory = './public/articles'
			let f = { 'd': [], 'f': [] }
			fs.readdir(directory, (err, files) => {
				files.forEach(file => {
					if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
						console.log('Directory: ' + file);
						f['d'].push('articles/' + file + '/');
					} else {
						console.log('File: ' + file);
						f['f'].push(file);
					}
				});
				console.log(f)
				res.render('articles/third/')
			});
		})

		this.eapp.post('/api/form1', (req, res) => {
			console.log(this.constructor.name, req.body)
			res.send("OK") 
		})

	}//()

}//class

