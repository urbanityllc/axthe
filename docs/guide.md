# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper(AXthe) for high productivity web app development</i>.
### Please star our repo
- http://github.com/axthe/axthe
 
### Support and Forum
- http://github.com/axthe/axthe/discussions
 
 
# Guide part I
 
You will not learn to dance by reading about dancing. What I'm saying you have to write code to learn to code. Lets jump in and see the AXthe tech stack!
Note, you will need to create an account on Supabase.io and Ably to follow this guide.

- For web components we use http://docs.ficusjs.org in the myCOMPapp folder. There is a exampleComp1 in myCOMPapp ./src. You can see a pug page and and a .js component. By following Micro Front Ends application architecture ( http://tinyurl.com/microFronts ) you can hide some of the .js in a large grained component so that page creators mostly leverage slots and attributes, and not have to deal with .js. In the myCOMPapp folder type ```./run.sh```, and navigate in a browser to ```/exampleComp1```.

- If you need to build 'native' mobile apps, you can use Cordova ( in myCOMPapp folder ). There is not an example of that, as it is trivial.

- From the myAPIapp folder you can start express.js via ```./r.sh```. (First copy envEx to .env and enter Ably and Supabase keys that you get when you register on their sites). In a browser type in ```/api/data1```, you can get the port from .env, likely http://localhost:8080/api/data1. That is how an API is called.

- You can peak at myAPIapp/lib


# Guide part II

- ./docs folder is Docsify. You can connect it to Caddy+DNS.

- You can add static11tyPug to Caddy+DNS. For more on 11ty check their docs. You can copy some of the class myCOMPapp outputs into 11ty.


- The directory|folder structure, as mentioned in the outline on the home page mostly has index.pug in every folder. This makes the navigation in the browser nicer and makes it easier to develop. That is the major difference from Express generator. You can start myAPIapp with ```./r.sh```, and in a browser open the port indicated, likely 8080.

- Everything myAPIapp is just standard express.js, the most popular node.js module:
http://gist.github.com/cekvenich2/a4764a1946356e387b6d47d988b5050a
 
- After setting up based on setup instructions, you should be running the myAPI project node. If you open the browser and edit Bootstrap SCSS or Pug it should auto-refresh. You should be able to edit it via a Cloud IDE and see the https web page/site changes ( after setting up Ably). I hope you can see that you can quickly prototype.
    1. Create account on Ably. In .env file create a field ```ABLYr=``` and your Ably key. 
    2. In ./lib/wapp add wapp.enablePageReload() 
    3. If you now edit any pug file, the browser will reload :-)
    4. If you have a style.scss file, and you edit any scss file, it will build style.css :-). For example, I renamed Bootstrap.scss to style.scss and now I can edit variables.scss and it will live reload my browser during development. So create something using one of the CSS frameworks.

- And back to what was mentioned on the home page: SSR via ```rend(req, res, dat)``` in the PreRouter.

- DNS

## Summary 
#### I + II

- If you navigate in browser to /exampleComp2 and click submit you should see the myCOMPapp update the myAPIapp.


Ideally you can see that the different styles of development:
- SSR + API
- JAM/components/mobile w/ a builder or static generator(11ty)

And you can see that you can make somethings SSR, somethings JAM/components and some thigs static-gen, all in the same app. (via subdomains or by copying the build optputs).

- http://dev.to/ducksoupdev/less-javascript-more-html-and-css-49gl
