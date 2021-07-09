# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper(AXthe) for high productivity web app development</i>.
 
### Please star our repo
- http://github.com/axthe/axthe

### Support and Forum
- http://github.com/axthe/axthe/discussions

### Pre-requsite 
Pre-requsite knowledge ahed of AXthe is this book (or a similar book) - 'HTML and CSS: Design and Build Websites by Jon Duckett'

# Overview of the AXthe curated tech stack:
 
AXthe offer more than one development style, and allows you to combine them:
- A classic full stack development(based on JAMstack), with Snowpack build and Micro frontends(similar to microservices), that is compatible with Cordova cross platform development for Mobile(iOS and Android) from a single code base.
- A modern static site and blog development based on 11ty.
- An application server, based on Express to server API's from above; or to host SSR with a 'pre-route'. (inspired by Express.js generator, first thing we set up so all have an API to call)

Other parts of the tech stack:
- For a modern http server we use Caddy instead of Apache or NGINX, as much easier to use, we show you how to set it up behind a DNS for auto-https. All the apps are normally behind Caddy or behind a CDN.
- For IDE we use a cloud based IDE: http://codeanywhere.com IDE (not their containers, you can use http://vultr.com for your host, others are listed in the setup section)
- For DB we use Supabase, an enhanced hosting service for PostgreSQL.
- While micro fronts can use almost all front end libraries(eg Svelte ), but we use FicusJS ( http://docs.ficusjs.org )
- For events we use Ably
- The example starter apps are using BootStrap v5.x, including scss hot-reload in development mode.


##  For the impatient, download it:
If you are already familiar with AXthe, you can download a starter app/kit, that includes the Caddyfile to setup the http server and includes both environments:
- For latest: http://github.com/axthe/axthe and click Code/Download ZIP), or use wget from shell to download the file.
In MyAapp folder rename file envEx to ```.env```. Running ```r.sh``` should start your SSR app :-).


## Layout
Pug is templating you already know how to use, it is html markup tags that are self closing! It is a fine alternative to PHP.
Check out pug: http://html2pug.vercel.app. Pug is similar to Haml or Slim, if you have not used it yet, you'll love it.
 
AXthe has a convention of always(with some exceptions) naming files as index.pug. That means if you have 3 pages in your webapp, you need 3 folders.
```
- ./public/lading/A/index.pug
- ./public/lading/B/index.pug
- ./public/lading/C/index.pug
```
Above convention create 3 landing pages alternatives (suitable for testing of marketing variations):
```
- http://localhost/lading/a
- http://localhost/lading/b
- http://localhost/lading/c
```
That is the biggest difference with the Express generator. Also there is a base class with a neat helper function ```rend(req, res, dat)``` the helps pass data to pug before the render.
 
Things like header.pug, or footer.pug you would not name index.pug, you can put in ./public/includes
 
### A more concepts:
- AXthe aims to be the most productive way to build any webapp, including mobile or CMS webapps. Specifically it aims to be better than the old productivity leader, LAMP, or even 'low code' tools. It make development fun, and productivity is fast, so that you can build exerimental apps.
 - AXthe tech stack approach is to eschew client side .js, and rely heavily on SSR. ( I really like the word eschew). The server side route in express.js intercepts the http request and passes any dynamic data to pug. That is 90% of AXthe. In addition to productivity, SSR is better at SEO and security than any client/browser side .js.
- AXthe is a designer friendly tech stack, so it is not just for front end and full stack developers. Even civilians, people not trained in software development can write professional grade webapps.
- AXthe stack also has AXthe npm module that has a few helper classes
 
## Docs
- http://docs.AXthe.net
