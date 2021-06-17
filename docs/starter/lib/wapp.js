const BasicEWApp  = require('axthe/BasicEWApp.js')
const APreRouter = require('./APreRouter.js') // this is what gets edited

// ////////////////////////////////////////
// this is all very similar to the express.js generator example
const wapp = new BasicEWApp() // make an app

new APreRouter(wapp.eapp) // tell the router about the app

// to finish setup
wapp.finalPrep(8080) // listen on this port
