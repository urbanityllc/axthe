const BasicEWApp  = require('axthe/BasicEWApp.js')
const APreRouter = require('./APreRouter.js') // this is what gets edited

const livereload = require('livereload')

// ////////////////////////////////////////

const wapp = new BasicEWApp() // make an app

new APreRouter(wapp) // tell the router about the app

// reload a page, not nodemon
var relos = livereload.createServer({'exts':['pug', 'css', 'js', 'png', 'gif', 'jpg']})
// comment out livereload to disable for production:
relos.watch( process.cwd() + "/public")

wapp.finalPrep(8080) // listen on this port
