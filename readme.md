# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper(AXthe) for high productivity web app development</i>.
 
### Please star our repo
- http://github.com/axthe/axthe

### Support and Forum
- http://github.com/axthe/axthe/discussions
 
## Overview of the AXthe curated tech stack:
 
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


###  For the impatient, download it:
If you are already familiar with AXthe, you can download a starter app/kit, that includes the Caddyfile to setup the http server and includes both environments:
- For latest: http://github.com/axthe/axthe and click Code/Download ZIP), or use wget from shell to download the file.
In MyAapp folder rename file envEx to ```.env```. Running ```r.sh``` should start your SSR app :-).

## Layout
Pug is templating you already know how to use, it is html markup tags that are self closing! It is a fine alternative to PHP.
Check out pug: http://html2pug.vercel.app
 
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


## Docs
- http://docs.AXthe.net
