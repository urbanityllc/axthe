
# An eXpress.js and Templating HElper (AXTHE)
<i>AXTHE tech stack is An opinionated HElper for eXpress.js Templating.</i>


### For the impatient
It is recommended you take the guided tour of AXTHE. You'll learn that AXTHE, in addition to using express.js templating, is based on a static file approach, it is compliant with JamStack.org.
 
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


 
### A few more key concepts
 
- https (tls) in AXTHE tech stack is provided by Caddy (instead of Apache or Nginx that you would use for LAMP). You can just use your DNS to point to Caddy, and it will take care of the s in https; with node.js being the app server behind the Caddy http server.
 
- You can, and often do, make a call to dynamically get a list of the static files, pages or content you have in a folder! This is often used with Pug template mixins. Here is how to enable that:
 
```
npm i axthe
```
This is the secret of the static files approach of JamStack: that it can be/is dynamic, just happens to be file centric. You can and still and do use a DB in addition to static files, but JamStack is a static file approach, so you'll have to learn the static file approach.

## Support
Please use AXTHE, star the project, and spread the word.

I also want to say that AXTHE is a designer firendly tech stack, so it is not just for front end and full stack developers. Even civilans, people not trained in software development can write profesional grade WebApps.


Support:
- https://github.com/axthe/axthe/discussions
 
Paid support coming soon.
