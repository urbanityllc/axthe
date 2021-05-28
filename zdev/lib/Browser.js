
const BasicBrowser     = require('axthe/util/BasicBrowser.js')

module.exports =  class Browser extends BasicBrowser {

	async list() {
		await this.init()

		this.page.goto('https://www.google.com')

		await this.page.waitForSelector('title')
		const title = await this.page.title()
		console.info(`The title is: ${title}`)

	}

}