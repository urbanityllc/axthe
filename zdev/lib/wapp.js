const BasicEWApp  = require('axthe/BasicEWApp.js')
const APreRouter = require('./APreRouter.js') // this is what gets edited

// ////////////////////////////////////////

const wapp = new BasicEWApp() // make an app

new APreRouter(wapp.eapp) // tell the router about the app

wapp.finalPrep(8082) // listen on this port
