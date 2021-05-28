
const puppeteer = require('puppeteer')

// //////////////////
module.exports =  class BasicBrowser  { // very usefull for e2e testing. and scraping

	browser 
	page

	async init() {
		this.browser = await puppeteer.launch()
		this.page = await this.browser.newPage()
	}

}