
# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper(AXthe) for high productivity web app development</i>.

### Please star our repo
- http://github.com/axthe/axthe

### Support and Forum
- http://github.com/axthe/axthe/discussions

# Guide part I
You will not learn to dance by reading about dancing. What I'm saying you have to write code to learn to code. Lets jump in and see the AXthe tech stack!
Note, you will need to create an account on Supabase.io and Ably to follow this guide.

- For web components we use http://docs.ficusjs.org in the myCOMPs folder. There is a exampleComp1 in myCOMPs ./src. You can see a pug page and and a .js component. By following Micro Front Ends application architecture ( http://tinyurl.com/microFronts ) you can hide some of the .js in a large grained component so that page creators mostly leverage slots and attributes, and not have to deal with .js. In the myCOMPs folder type ```./run.sh```, and navigate in a browser to ```/exampleComp1```.
Note that the data|model|business layer can/should be used to offload .js to the server from the client/browser, and to facilitate easier integration testing. (It is a good practice that for each page|screen there is a corresponding data|model|business layer class that does the heavy lifting and state management)
 
- If you need to build 'native' mobile apps, you can use Cordova ( in myCOMPs folder ). There is not an example of that, as making cross platform native mobile apps is trivial with Cordova.
 
- From the myAPIapp folder you can start express.js via ```./r.sh```. (First copy envEx to .env and enter Ably and Supabase keys that you get when you register on their sites). In a browser type in ```/api/data1```, you can get the port from .env, likely http://localhost:8080/api/data1. That is how an API is called.
 
- You can peak at myAPIapp/lib
 
 
# Guide part II
 
- We are going to connect to DNS via Caddy as the last step in Guide part II/here.
	1. ./docs folder is Docsify, it uses markdown. You can connect it to Caddy+DNS.
	2. You can add static11tyPug to Caddy+DNS. It is configured to use Pug as the markup/templeting For more on 11ty check their docs. Both 11ty and Docsify are listed on http://JAMstack.org/generators page.
 
- The directory|folder structure, as mentioned in the outline on the home page, mostly has index.pug in every folder. This makes the navigation in the browser nicer and makes it easier to develop. That is the major difference from the express.js generator. (http://expressjs.com/en/starter/generator.html ). Take a look at myAPIapp/public/content.
 
- Everything myAPIapp is just standard express.js (
http://gist.github.com/cekvenich2/a4764a1946356e387b6d47d988b5050a ), but AXthe has a few lines of helper files, eg. SSR via ```rend(req, res, dat)``` in the PreRouter.
 
- MyAPIapp also auto reloads on a page change, or if scss file is changed. There must be one file called style.scc, and that can reference other scss files. (The example in myAPIapp/public includes bootstrap v5 scss). If you open the browser and edit Bootstrap SCSS or Pug it should auto-refresh. You should be able to edit it via a Cloud IDE and see the https web page/site changes ( after setting up Ably). I hope you can see that you can quickly prototype an application.
   1. Create account on Ably. In .env file create a field ```ABLYr=``` and your Ably key.
   2. In ./lib/wapp.js add wapp.enablePageReload()
 
- Caddy is a modern http server similar to older Apache and NGINX. Here is an example CaddyFile, it shows 3 subdomains, 1, a, and mysite:
 
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
 
# Summary
 
#### I + II = :
 
Ideally you can comprehend the different styles of development:
1. JAM/components/mobile w/ a builder or static generator(11ty) calling CORS API. This works great with a CDN if you need to scale.
2. SSR. SSR is the other style, it works great for SEO, but needs more than a CDN to scale (for example Caddy load balancing by an IP hash)
 
- To make sure, here is the SSR way again: While the myAPIapp is running(r.sh), lets navigate via a browser to /data2. In public/data2 you can in IDE see the Pug. Via IDE you can see in ./lib/APreRouter.js you can see the route passing in the data. You can see how if this is good for SEO. Even if the route does not exist, you can dynamically render something for SEO. ( In the JAM/components style, the page/route has to exist, but you can pass it a query string to make it dynamic.)

- Here is a relevant article: - http://dev.to/ducksoupdev/less-javascript-more-html-and-css-49gl
One way to have less .js in your page is to leverage large grained components and data|model|business layer. This allows for higher level and more productive development.

- And you can mix, run static, JAM/components and SSR at the same time. Either as a subdomains; or by copying static or JAM/component artifacts to myAPIapp/public. Lets look at one last example of the AXthe tech stack:  it needs the two servers to run as the same time: start myAPIapp and myCOMPs. If you open exampleComp2, and submit, you can see the data goes to the myAPIapp. Aside, you can see how the page has very little .js as the component leverages slots. AXthe is all about high development productivity. 
