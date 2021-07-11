# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper(AXthe) for high productivity web app development</i>.
 
### Please star our repo
- http://github.com/axthe/axthe

### Support and Forum
- http://github.com/axthe/axthe/discussions


# Guide part I

You will not learn to dance by reading about dancing. What I'm saying you have to write code to learn to code.

- The directory structure, as mentioned in the outline on the home page mostly has index.pug in every folder. This makes the navigation in the browser nicer and makes it easier to develop.

- You can glance package json, and write some tests. For example a business model layer that uses http://npmjs.com/package/@supabase/supabase-js
That lets you write an API.

- In the myJAMapp there is a exampleComp2, that calls an API from a web component (in aligment ), we use http://docs.ficusjs.org. You should know the difference between a page and a component, not as easy as you may think.

- And for JAMapp, optionaly you can try to build a hello world Cordova based browser app.

# Guide part II

Lets level up to some more topics:

- Everthing myAPIapp is just standard express.js, the most popular node.js module:
 http://gist.github.com/cekvenich2/a4764a1946356e387b6d47d988b5050a

- After setting up based on setup instructions, you should be running the myAPI project node. If you open the browser and edit Bootstrap SCSS or Pug it should auto-refresh. You should be able to edit it via a Cloud IDE and see the https web page/site changes, after setting up Ably

- There are a few helper classes for S3 content storage, SQL, cache, scraping, file managment, etc. here, that you leverage via npm package: https://github.com/axthe/committers/tree/main/axtheLib/dat, there is a helper function rend() that you can leverage in the router.


### Optional

- Optionaly, connect the static11tyPug site (in ./optional folder) w/ Caddy/DNS. More static front end development based on Pug.

- Optionaly, setup the Ackee Analytics with Caddy/DNS from optional/AckeeAnalytics folder. (it needs Mongo, you can host it on MongoDB.com)

## Summary

Idealy part II should show you the different styles of development:
- SSR + API
- JAM/mobile w/ a builder
- StaticGen/11ty