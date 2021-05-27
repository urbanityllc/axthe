
# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper for high productivity webapp development</i>

#### Please star our repo
- http://github.com/axthe/axthe

### Support
- http://github.com/axthe/axthe/discussions


## About
AXthe aims to be the most productive way to build webapps, including CMS webapps. Specifically it aims to be better than the old productivity leader: LAMP.
 
It is based on the most popular node.js library, express.js. Express.js generator emits a starter webapp using templeting: It uses pug(formerly known as Jade). Pug is templating you already know how to use, it is html markup tags that are self closing! It a fine alternative to PHP.
Check out pug: http://html2pug.vercel.app
 
AXthe tech stack approach is to eschew client side .js, and rely heavily on SSR. ( I really like the word eschew). The server side route in express.js intercepts the http request and passes any dynamic data to pug. That is 90% of AXthe. In addition to productivity, SSR is better at SEO and security than any client/browser side .js.


### For the impatient
It is recommended you take the guided tour of AXthe. You'll learn that AXthe, in addition to using express.js templating, is based on a static file approach, it is compliant with JamStack.org.
 
It has a convention of always(with some exceptions) naming files as index.pug. That means if you have 3 pages in your webapp, you need 3 folders.
```
- /public/lading/A/index.pug
- /public/lading/B/index.pug
- /public/lading/C/index.pug
```
Above convention create 3 landing pages alternatives (suitable for testing of marketing variations):
```
- http://localhost/lading/a
- http://localhost/lading/b
- http://localhost/lading/c
```

### Starter app:
If you are already familiar with AXthe, you can download a starter app:
- <a href="starter.zip">starter.zip</a>
Unzip. Rename the folder starter to the name of your webapp.

### A few more key concepts
- https (TLS) in AXthe tech stack is provided by Caddy http server, instead of Apache or Nginx that you would use for LAMP. Caddy will proxy https traffic to node.js webapp server. You would just point your DNS subdomain to Caddy, and it will take care of the s in https; with node.js being the app server behind the Caddy http server.
 
- You can, and often do, make a call to dynamically get a list of the static files, pages or content you have in a folder! This is often used with pug template mixins. Here is how to enable that:
```
npm i axthe
```
This is the secret of the static files approach of JamStack: that it can be/is dynamic, just happens to be file centric. You can and still and do use a DB in addition to static files, but JamStack is a static file approach, so you'll have to learn the static file approach.

- For full-stack development, AXthe leverages PostgreSQL, user auth and more via http://npmjs.com/package/@supabase/supabase-js

- AXthe is a designer firendly tech stack, so it is not just for front end and full stack developers. Even civilans, people not trained in software development can write profesional grade webapps.

- Compatible with http://prepros.io

- AXthe stack also has AXthe npm module that has 3 main helper classes: one to setup the app, one for the routes and one for business/model layer. That last layer is the one you would create any intergrations tests.