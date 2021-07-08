'use strict';
const debug = require('debug')
if (debug.enabled) console.log('debug enabled')
const fs = require('fs-extra')
try {
	fs.readFileSync('.env', 'utf8')
	let dotEnv = require('dotenv').config().parsed
	console.log('.env keys:')
	for (const k in dotEnv) {
		console.log(k)
	  }
	console.log()
  } catch (err) {
	console.error(err)
	console.error(`.env file does not exist, this won't work`)
	process.exit(1)
}
// ***

const test = require('tape')

const Model1 = require('../lib/dat/Model1.js')

// ////////////////////////////////
// test.onFinish (() => {process.exit (0)})

test('test sample', async (t)=> {
	//t.plan(1)
	const m = new Model1()
	m.ins()
	
	//t.ok(true)
})


