# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper(AXthe) for high productivity web app development</i>.
### Please star our repo
- http://github.com/axthe/axthe
 
### Support and Forum
- http://github.com/axthe/axthe/discussions
 
 
# Guide part I
 
You will not learn to dance by reading about dancing. What I'm saying you have to write code to learn to code. Lets jump in!
 
1. The directory structure, as mentioned in the outline on the home page mostly has index.pug in every folder. This makes the navigation in the browser nicer and makes it easier to develop. That is the major difference from Express generator. You can start myAPIapp with ```./r.sh```.
 
2. You can glance package json, and see an integration test. A business model layer that uses http://npmjs.com/package/@supabase/supabase-js as a data layer.
 
3. In the myJAMapp there is a exampleComp1 and 2. There is a web component on a page that calls an API in myAPIapp. You need to run both the myAPIapp that hosts the API and myJAMapp that hosts the web component.
 
For web component we use http://docs.ficusjs.org.

 
# Guide part II
 
Lets level up to some more topics:
 
- Everything myAPIapp is just standard express.js, the most popular node.js module:
http://gist.github.com/cekvenich2/a4764a1946356e387b6d47d988b5050a
 
- After setting up based on setup instructions, you should be running the myAPI project node. If you open the browser and edit Bootstrap SCSS or Pug it should auto-refresh. You should be able to edit it via a Cloud IDE and see the https web page/site changes, after setting up Ably
 
- There are a few helper classes for S3 content storage, SQL, cache, scraping, file management, etc. here, that you leverage via npm package: https://github.com/axthe/committers/tree/main/axtheLib/dat, there is a helper function rend() that you can leverage in the router.
 
 
 
### Optional
 
- Also there is an S3 example for a store, as well as a distributed cache baed on SQLite.
 
- And for JAMapp, optionally you can try to build a hello world Cordova based browser app.
 
- Optionaly, connect the static11tyPug site (in ./optional folder) w/ Caddy/DNS. More static front end development based on Pug.
 
- Optionaly, setup the Ackee Analytics with Caddy/DNS from optional/AckeeAnalytics folder. (it needs Mongo, you can host it on MongoDB.com)
 
- Optionaly, check out prepros.io to learn about generators.
 
## Summary
 
Ideally part II should show you the different styles of development:
- SSR + API
- JAM/mobile w/ a builder
- StaticGen/11ty
 
