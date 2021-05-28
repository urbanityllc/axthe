
const puppeteer = require('puppeteer')

// //////////////////
module.exports =  class BasicBrowser  {

	browser 
	page

	async init() {
		this.browser = await puppeteer.launch()
		this.page = await this.browser.newPage()
	}

}