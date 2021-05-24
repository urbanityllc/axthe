const BasicEWApp  = require('axthe/BasicEWApp.js')
const APreRouter = require('./APreRouter.js') // this is what gets edited

// ////////////////////////////////////////

const wapp = new BasicEWApp() // make an app

new APreRouter(wapp) // tell the router about the app

wapp.finalPrep(8080) // listen on this port
