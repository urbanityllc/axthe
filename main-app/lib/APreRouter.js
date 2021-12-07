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
				.from('scraper-articles')
				.select('*')
				.range(0,1)
			let dat = {
				articles: JSON.stringify(articles)
			}
			this.rend(req, res, dat)
		})

		this.eapp.get('/article/', async (req, res) => {
			let postId = req.query.postId ? parseInt(req.query.postId) : 1
			let { data: article, error } = await supabase
				.from('scraper-articles')
				.select('*')
				.eq('post_id', postId)
				.limit(1)
			//res.send(article[0])
			this.rend(req, res, article[0])
		})
		

		// passing article data to landing/a
		this.eapp.get('/landing/a', async (req, res) => {
			let { data: articles, error } = await supabase
				.from('scraper-articles')
				.select('*')
				.range(0,10)
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
			let start = req.query.start ? parseInt(req.query.start) : 0
			let end = req.query.end ? parseInt(req.query.end) : start + 1
			let { data: articles, error } = await supabase
				.from('scraper-articles')
				.select('*')
				.range(start, end)
			res.render('infinite-scroll', { 
				basedir: './public', 
				articles: JSON.stringify(articles),
				start: start,
				end: end
			})
			//send html of articles
			/*let data = {
				articles: JSON.stringify(articles),
				start: start,
				end: end
			}
			res.send(data)*/
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

