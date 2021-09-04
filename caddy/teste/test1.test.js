'use strict';

const test = require('tape')
const BasicBrowser     = require('axthe/other2/BasicBrowser.js')

// ////////////////////////////////
test.onFinish (() => {process.exit (0)})

test('test sample', async (t)=> {
	t.plan(1)

	const bro1 = new BasicBrowser()
	await bro1.init()
	await bro1.page.goto('https://news.ycombinator.com', { waitUntil: "networkidle2" })

	const res = await bro1.page.evaluate(() => { // has scope of document
		return document.querySelectorAll(`a.storylink`)
	})
	t.comment('oh hi', res)
	console.log('oh hi2', res)

	bro1.browser.close()
	t.ok(true)
})


