 
# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper for high productivity webapp development</i>
 
It offers two development environments, first the above mentioned SSR-first with REST API development; and a second CORS-only for pure native mobile(/Cordova) and/or pure CDN edge deployment(aka Jamstack), leveraging plain webcomponents and the REST APIs from SSR. So both SSR and JAM stack are supported in separate but productive development environments.
 
 
#### Please star our repo
- http://github.com/axthe/axthe
 
### Support
- http://github.com/axthe/axthe/discussions


## About
AXthe aims to be the most productive way to build webapps, including CMS webapps. Specifically it aims to be better than the old productivity leader: LAMP.
The SSR environment is based on the most popular node.js library, express.js. Express.js generator emits a starter webapp using templeting: It uses pug(formerly known as Jade). Pug is templating you already know how to use, it is html markup tags that are self closing! It is a fine alternative to PHP.
Check out pug: http://html2pug.vercel.app
 
 
AXthe tech stack approach is to eschew client side .js, and rely heavily on SSR. ( I really like the word eschew). The server side route in express.js intercepts the http request and passes any dynamic data to pug. That is 90% of AXthe. In addition to productivity, SSR is better at SEO and security than any client/browser side .js.
 
 
### For the impatient
It is recommended you take the guided tour of AXthe, by clicking 'GUIDE' menu item on http://docs.AXthe.net.
 
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
 
### Starter app
If you are already familiar with AXthe, you can download a starter app, that includes the Caddyfile to setup the http server and includes both environments:
- http://github.com/axthe/axthe/releases (or http://github.com/axthe/axthe and click Code/Download ZIP)
Unzip. In my1SSRapp folder rename file envEx to ```.env```. Running ```d.sh``` should start your SSR app :-).
 
 
### Forum
 
- http://github.com/axthe/axthe/discussions
 
 
### A few more key concepts
- AXthe SSR environment is based on improving https://expressjs.com/en/starter/generator.html. The Jamstack/CORS environment is based on http://SnowPack.dev (and can leverage Cordova), as it allows for use of standard EcmaScript imports (like ```import { EventBusSingleton } from 'http://cdn.jsdelivr.net/npm/EventBusSingleton/leb/index.js'```)
 
- AXthe is a designer friendly tech stack, so it is not just for front end and full stack developers. Even civilians, people not trained in software development can write professional grade webapps.
 
- https (TLS) in AXthe tech stack is provided by Caddy http server, instead of Apache or Nginx that you would use for LAMP. Caddy will proxy https traffic to node.js webapp server. You would just point your DNS subdomain to Caddy, and it will take care of the s in https; with node.js being the app server behind the Caddy http server.
 
- For full-stack development, AXthe leverages PostgreSQL, user auth and more via http://npmjs.com/package/@supabase/supabase-js
 
- AXthe stack also has AXthe npm module that has a few helper classes: one to setup the app, one for the routes and one for the business/model layer.
 
