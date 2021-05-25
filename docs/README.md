
# An eXpress.js and Templating HElper (AXTHE)
AXTHE tech stack is An optinonated HElper for eXpress.js Templating. 

## AXTHE
AXTHE aims to be the most productive way to build Webapps, including CMS Webapps. Specifcialy it aims to be better than the old productivity leader: LAMP.

It is based on the most popular node.js module, express.js. Express.js generator emits a starter webapp using templeting: It uses Pug(formely known as Jade). Pug is templating you already know how to use, it is html mark up tags that are self closing! It a fine alternative to PHP.

AXTHE tech stack approach is to eschew client side .js, and rely hevilly on SSR. ( I realy like the word eschew). The server side route in node.js intercepts the http request and passes any dynamic data to Pug. That is 90% of AXTHE.

The aim of AXTHE is the most productive way to develop WebApps including CMS Webapps.

### Starter app:
If you are already familiar with AXTHE, you can donwload a starter app: 
- <a href="starter.zip">starter.zip</a>

### For the impatient
It is recommend you take the guided tour of AXTHE, menu on the left. You'll learn that AXTHE, in addition to using express.js templating, is based on static file approach, it is complaint to JamStack.org.

It has a convention of allways(with some execetions) naming files as index.pug. That means if you have 3 pages in your webapp, you need 3 folders.
- /public/lading/A/index.pug
- /public/lading/B/index.pug
- /public/lading/C/index.pug

Above convention create 3 landing pages alternatives (suitable for testing of marketing variations):
- http://localhost/lading/a
- http://localhost/lading/b
- http://localhost/lading/c

### A few more important concepts

- https (tls) in AXTHE tech stack is provided by Caddy (instead of Apache or Nginx that you would use for LAMP). You can just use your DNS to point to a subdomain and Caddy will take care of the s in https; with node.js being the app server behind the Caddy http server.

- You can, and often do, make a call to dynamically get a list of the static files, pages or content you have in a folder! This is often used with Pug template mixins. Here is how to enable that:

```
npm i axthe
```
This is the secret of the static files approach of JamStack: that it can be dynamic, just happens to be file centric. You can and still do use a DB, but JamStack is the static file approach.

## Support
Please use this, star the project, and spread the word.

Support: 
- https://github.com/axthe/axthe/discussions

Paid support comming soon.