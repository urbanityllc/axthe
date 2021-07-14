'use strict';

// needs .env with ABLYr=xxx:
const EWApp  = require('axthe/EWApp.js')
const APreRouter = require('./APreRouter.js') // this is what gets edited
const cors = require('cors')

// ////////////////////////////////////////
// this is all very similar to the express.js generator example
const wapp = new EWApp() // make an app
wapp.eapp.use(cors())
wapp.eapp.use(function (req, res, next) {
	res.set('Cache-control', 'public, max-age=2')
	res.set('Cache-control', 'public, s-maxage=1')
	next()
})
// enable reload on assets/**/style.scss and pug edits, make sure you register for Ably events
/wapp.enablePageReload()


// now you can add routes
new APreRouter(wapp.eapp) // tell the router about the app

// to finish setup
wapp.finalPrep(9090) // listen on this port
