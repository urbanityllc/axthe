'use strict';

// needs .env with ABLYr=xxx:
const EWApp  = require('axthe/EWApp.js')

const APreRouter = require('./APreRouter.js') // this is what gets edited

// ////////////////////////////////////////
// this is all very similar to the express.js generator example
const wapp = new EWApp() // make an app

// enable reload on assets/**/style.scss and pug edits, maybe you don't want this in production:
// wapp.enablePageReload()


// now you can add routes
new APreRouter(wapp.eapp) // tell the router about the app

// to finish setup
wapp.finalPrep(8083) // listen on this port
