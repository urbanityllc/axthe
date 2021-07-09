# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper(AXthe) for high productivity web app development</i>.
 
#### Please star our repo
- http://github.com/axthe/axthe

#### Support and Forum
- http://github.com/axthe/axthe/discussions


# Guide


## Prep

2. You should also have an idea of what you are building at a high level, best is to 'copy' another website or a web app. Or at least you should know how many pages/screens you can have at a high level:
http://mockflow.com/pricing or http://balsamiq.com/buy/#cloud. There is no need to enter every field, just idea of what pages/screens will be doing. That would be the minimum. For maximum, follow the advice of Amazon CTO: http://allthingsdistributed.com/2006/11/working_backwards.html

3. Likely you also want to setup a cadance/ritual, to meet at a regular time on a regular day, twice a week | bi-weekly at the same time via a video such as Zoom. Mostly you revew what was done, and plan what will be done by the next meeting. For tracking you can use Airtable or Notion.

When you are ready, continue:

# Guide

After setting up based on setup instructions, you should be running SSR project node. If you open the browser and edit Bootstrap SCSS or Pug it should auto-refresh.

#### A PreRouter is used to intercept the http request and populate the data for pug templates!

Everthing in SSR is just standard express.js, the most popular node.js module:
- https://gist.github.com/cekvenich2/a4764a1946356e387b6d47d988b5050a


Take a look at the lib/PreRoute and she how it works with public/form and public/data.
Good so far?

## Next steps

But mostly you'd do standard DB stuff, such as:
- http://npmjs.com/package/@supabase/supabase-js


