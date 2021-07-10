# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper(AXthe) for high productivity web app development</i>.
 
### Please star our repo
- http://github.com/axthe/axthe

### Support and Forum
- http://github.com/axthe/axthe/discussions


### Pre-project start

- You should  have an idea of what you are building at a high level, one way is to 'be inspired' by another website or a web app. Or you should mock up so we know at least the number of pages/screen:
http://mockflow.com/pricing or http://balsamiq.com/buy/#cloud. There is no need to enter every field, just an idea of what pages/screens will be doing. That would be the minimum. For maximum, follow the advice of Amazon CTO: http://allthingsdistributed.com/2006/11/working_backwards.html

- Likely you also want to setup a cadance/ritual, to meet at a regular time on a regular day, twice a week | bi-weekly at the same time via a video such as Zoom. Mostly you revew what was done, and plan what will be done by the next meeting. For tracking tasks you can use Notion or Airtable

# Guide part I

You will not learn to dance by reading about dancing. What I'm saying you have to write code to learn to code.

- After setting up based on setup instructions, you should be running the myAPI project node. If you open the browser and edit Bootstrap SCSS or Pug it should auto-refresh. You should be able to edit it via a Cloud IDE and see the https web page/site changes.

- The directory structure, as mentioned in the outline on the home page mostly has index.pug in every folder. This makes the navigation in the browser nicer and makes it easier to develop.

- You can glance package json write some tests. For example a business model layer that uses http://npmjs.com/package/@supabase/supabase-js
That lets you write an API.

- In the myJAMapp there is a exampleComp2, that calls an API from a web component (in aligment ), we use http://docs.ficusjs.org. You should know the difference between a page and a component, not as easy as you may think.

- And for JAMapp, optionaly you can try to build a hello world Cordova based browser app.

- For monitoring you can use: http://sentry.io/onboarding/axthe/get-started both on node|server and in the client/browser/mobile app.

# Guide part II

Lets level up to some more topics:
- Connect the static11ty site w/ Caddy/DNS. More static front end development based on Pug.

- Optional, setup the Ackee Analytics with Caddy/DNS from zAckeeAnalytics folder. (it needs Mongo, you can host it on MongoDB.com)

Now back to the myAPIapp
- Everthing myAPIapp is just standard express.js, the most popular node.js module:
 http://gist.github.com/cekvenich2/a4764a1946356e387b6d47d988b5050a

Idealy part II should show you the different styles of development:
- SSR + API
- JAM/mobile
- StaticGen/11ty