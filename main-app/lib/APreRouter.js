'use strict';

// ////////////////////////////////
const BasicPreRouter = require('axthe/BasicPreRouter.js')
const path = require('path')
const fs = require('fs')
const supa = require('@supabase/supabase-js')

const supabaseUrl = 'https://qjztgscvebluwsbdxull.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = supa.createClient(supabaseUrl, supabaseKey)
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

		this.eapp.get('/', async (req, res) => {
			let { data: articles, error } = await supabase
				.from('articles')
				.select('*')
			let dat = {
				articles: JSON.stringify(articles)
			}
			this.rend(req, res, dat)
		})

		// just api, no path
		this.eapp.get('/api/data1', (req, res) => {
			let dat = {title: 'My name is Vic'}
			res.send(JSON.stringify(dat)) 
		})

		this.eapp.get('/api/articles', async (req, res) => {
			let { data: articles, error } = await supabase
				.from('articles')
				.select('*')
			console.log(articles)
			res.send(JSON.stringify(articles))
		})

		this.eapp.post('/api/articles', async (req, res) => {
			//need to implement auth
			console.log({
				title: req.body.title,
				author: req.body.author,
				content: req.body.content
			})
			const { data, error } = await supabase
				.from('articles')
				.insert([{
				title: req.body.title,
				author: req.body.author,
				content: req.body.content
				},])
			res.redirect('/')
		})


		this.eapp.post('/api/form1', (req, res) => {
			console.log(this.constructor.name, req.body)
			res.send("OK") 
		})

	}//()

}//class

