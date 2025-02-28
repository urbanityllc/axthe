
# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper(AXthe) for high productivity web app development</i>.

### Please star our repo
- http://github.com/axthe/axthe

### Support and Forum
- http://github.com/axthe/axthe/discussions

# Guide part I
You will not learn to dance by reading about dancing. What I'm saying you have to write code to learn to code. Lets jump in and see the AXthe tech stack!
Note, you will need to create an account on Supabase.io and Ably to follow this guide.

- For web components we use http://docs.Ficusjs.org in the myCOMPs folder. There is a exampleComp1 in myCOMPs ./src. You can see a pug page and and a .js component. By following Micro Front Ends application architecture ( http://tinyurl.com/microFronts ) you can hide some of the .js in a large grained component so that page creators mostly leverage slots and attributes, and not have to deal with .js. 

In the myCOMPs folder type ```./run.sh```, and navigate in a browser to ```/exampleComp1```.

- If you need to build 'native' mobile apps, you can use Cordova ( in myCOMPs folder ). There is not an example of that, as making cross platform native mobile apps is trivial with Cordova.
 
- From the myAPIapp folder you can start express.js via ```./r.sh```. (First copy envEx to .env and enter Ably and Supabase keys that you get when you register on their sites). In a browser type in ```/api/data1```, you can get the port from .env, likely http://localhost:8080/api/data1. That is an API and we can call it from a client/browser via fetch().

- You can peak at myAPIapp/lib/dat to model. Note that the data|model|business layer can/should be used to offload .js to the server from the client/browser, and to facilitate easier integration testing. (It is a good practice that for each page|screen there is a corresponding data|model|business layer class that does the heavy lifting and state management)

# Guide part II
 
- MyAPIapp can also auto reloads on a page change, or if a scss file is changed(most/all tech stack have this feature). There must be one file called style.scc, and that can reference other scss files. (The example in myAPIapp/public includes bootstrap v5 scss). If you open the browser and edit Bootstrap SCSS or Pug it should auto-refresh. You should be able to edit it via a Cloud IDE and see the web page/site changes ( after setting up Ably). You can see that you can quickly prototype an application.
	1. Create account on Ably. In .env file create a field ```ABLYr=``` and your Ably key.
	2. In ./lib/wapp.js uncomment wapp.enablePageReload().
	3. Now you can change a pug or scss file and it will autoreload.

We are going to connect to DNS via Caddy as the last step in Guide part II/here.
	1. ./docs folder is index.html, that uses Docsify. Docsify uses markdown. You can connect Docsify to Caddy+DNS at the end of this secion.
	2. Also there is static11tyPug. 11ty is configured to use Pug as the markup/templeting. For more on 11ty check their docs. Both 11ty and Docsify are listed on http://JAMstack.org/generators page. You can connect 11ty to Caddy+DNS at the end of this secion, after you see how to configure Caddyfile.

- The directory|folder structure, as mentioned in the outline on the home page, mostly has index.pug in every folder. This makes the navigation in the browser nicer and makes it easier to develop. That is the major difference from the express.js generator. (http://expressjs.com/en/starter/generator.html ). Take a look at myAPIapp/public/content folder. Everything myAPIapp is just standard express.js (
http://gist.github.com/cekvenich2/a4764a1946356e387b6d47d988b5050a ), except that AXthe mostly uses index.pug, so you have to use folders as routes. Take a look at myAPIapp/public/content.

- Caddy is a modern http server similar to the older Apache and NGINX. Here is an example CaddyFile, it shows 3 subdomains, 1, a, and mysite:
 
```
	1.axthe.net {
		respond "hi"
	}
 
	a.axthe.net {
		reverse_proxy localhost:9090
	}
 
	mysite.axthe.net{
		root * ./static11tyPug/static
		file_server
	}
```
 
It shows 3 ways of using Caddy, as proxy, file server, or just to test that a subdomain ***DNS*** works, that you can get to it from a browser via the DNS subdomain. After you save the Caddyfile and ```caddy start```, you should go to your DNS service and setup up A records to point to the IP address of your server. Caddy will recognize the subdomain (such as www) based on the configuration in Caddyfile.
 
# Summary of I + II

Video demo: http://youtu.be/Qh84MekdPes

Ideally you grok the different styles of development from section I and II:

I. JAM/components/mobile w/ a builder or static generator(11ty) calling CORS API. This works great with a CDN if you need to scale.

II. SSR. SSR is the other style, it works great for SEO, but needs more than a CDN to scale (for example Caddy load balancing by an IP hash)
 
- To make sure, here is the SSR way again: While the myAPIapp is running(r.sh), lets navigate via a browser to /data2. In *** public/data2 *** you can in IDE see the Pug. Via IDE you can see in ./lib/APreRouter.js you can see the route passing in the data. AXthe has a few lines of helper files, eg. SSR via ```rend(req, res, dat)``` in the PreRouter.

You can see how if this is good for SEO. Even if the route does not exist, you can dynamically render something for SEO. ( In the JAM/components style, the page/route has to exist, but you can pass it a query string to make it dynamic.).

- Here is a relevant article: http://dev.to/ducksoupdev/less-javascript-more-html-and-css-49gl
One way to have less .js in your page is to leverage large grained components and data|model|business layer. Reducing .js allows for higher level and more productive development.

- And you can mix, run static, JAM/components and SSR at the same time. Either as a subdomains; or by copying static or JAM/component artifacts to myAPIapp/public. Lets look at one last example of the AXthe tech stack:  it needs the two servers to run as the same time: start myAPIapp and myCOMPs. If you open exampleComp2, and submit, you can see the data goes to the myAPIapp. Aside, you can see how the page has very little .js as the component leverages slots. AXthe is all about high development productivity. 
