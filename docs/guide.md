# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper(AXthe) for high productivity web app development</i>.
### Please star our repo
- http://github.com/axthe/axthe
 
### Support and Forum
- http://github.com/axthe/axthe/discussions
 
 
# Guide part I
 
You will not learn to dance by reading about dancing. What I'm saying you have to write code to learn to code. Lets jump in!
Note, you will need to create an account on Supabase.io and Ably to follow this guide.
 
1. The directory structure, as mentioned in the outline on the home page mostly has index.pug in every folder. This makes the navigation in the browser nicer and makes it easier to develop. That is the major difference from Express generator. You can start myAPIapp with ```./r.sh```.
 
2. You can glance package json, and see an integration test. A business model layer that uses http://npmjs.com/package/@supabase/supabase-js as a data layer. You can run ts.sh to run a sample integration test. This allows you to write an API, take a look at myJAMapp/lib/APreRouter.js for ```this.eapp.get('/api/data1', (req, res) => {```, you can just go to the browser /api/data1 and see how an API is called.


3. For web components we use http://docs.ficusjs.org library. In the myJAMapp folder, there is a exampleComp1 and 2. There is a web component on a page that calls an API in myAPIapp. You need to run both the myAPIapp that hosts the API and myJAMapp that hosts the web component. In addtion to running the myAPIapp in 1, you should start myJAMapp build watcher in that folder via ```run.sh```. If you navigate in browser to exampleComp2 and click submit you should see the myJAMapp update the myAPIapp.

4. If you need to build 'native' mobile apps, you can use Cordova in myJAMapp folder.


# Guide part II
 
Lets level up to some more topics:
 
- Everything myAPIapp is just standard express.js, the most popular node.js module:
http://gist.github.com/cekvenich2/a4764a1946356e387b6d47d988b5050a
 
- After setting up based on setup instructions, you should be running the myAPI project node. If you open the browser and edit Bootstrap SCSS or Pug it should auto-refresh. You should be able to edit it via a Cloud IDE and see the https web page/site changes ( after setting up Ably). I hope you can see that you can quickly prototype.

## Summary
 
Ideally part II should show you the different styles of development:
- SSR + API
- JAM/mobile w/ a builder
 
### Appendix

- AXthe tries to follow http://dev.to/ducksoupdev/less-javascript-more-html-and-css-49gl