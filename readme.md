
# An eXpress.js and Templating HElper (AXTHE)
<i>AXTHE tech stack is An opinionated HElper for eXpress.js Templating.</i>

Docs ( github ) and the home page: http://docs.axthe.net

 
### For the impatient
It is recommended you take the guided tour of AXTHE(docs page). You'll learn that AXTHE, in addition to using express.js templating, is based on a static file approach, it is compliant with JamStack.org.
 
It has a convention of always(with some exceptions) naming files as index.pug. That means if you have 3 pages in your webapp, you need 3 folders.
- /public/lading/A/index.pug
- /public/lading/B/index.pug
- /public/lading/C/index.pug
 
Above convention create 3 landing pages alternatives (suitable for testing of marketing variations):
- http://localhost/lading/a
- http://localhost/lading/b
- http://localhost/lading/c

### Starter app:
If you are already familiar with AXTHE, you can download a starter app:
- <a href="starter.zip">starter.zip</a>


## AXTHE
AXTHE aims to be the most productive way to build Webapps, including CMS Webapps. Specifically it aims to be better than the old productivity leader: LAMP.
 
It is based on the most popular node.js library, express.js. Express.js generator emits a starter webapp using templeting: It uses Pug(formerly known as Jade). Pug is templating you already know how to use, it is html markup tags that are self closing! It a fine alternative to PHP.
 
AXTHE tech stack approach is to eschew client side .js, and rely heavily on SSR. ( I really like the word eschew). The server side route in express.js intercepts the http request and passes any dynamic data to Pug. That is 90% of AXTHE. In addition to productivity, SSR is better at SEO and security than any client/browser side .js.
 
The goal of AXTHE is to be the most productive way to develop WebApps, including CMS Webapps.

#### Other links:
- https://www.npmjs.com/package/axthe
