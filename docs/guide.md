
# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper for high productivity webapp development</i>

#### Please star our repo
- http://github.com/axthe/axthe

### Support
- http://github.com/axthe/axthe/discussions


### Pre-reqs
- Glance pug: http://html2pug.vercel.app

- Mixins: http://pugjs.org/language/mixins.html

## Getting started:

Download a starter app:
- <a href="starter.zip">starter.zip</a>

You can start via x.sh in the unzip folder:

Notice the layout of the public folder storing pug(html):
you can download a starter app:
https://github.com/axthe/axthe/tree/main/docs/starter/public
The layout has a nav.pug, where the menu is, so that you can include that in each index.pug.

And the PreRouter: 
https://github.com/axthe/axthe/tree/main/docs/starter/lib
#### A PreRouter is used to intercept the http request and populate the data for pug templates!

Everthing is just standard express.js, the most popular node.js module:
- http://github.com/expressjs/express
In fact, if you use express.js generator you'll get something similar to the starter.zip that you unziped. Just like the express.js example, AXthe favors SSR.

Good so far?

## More:

Via axthe lib you can get a list of pages in a subfolder, to use in your PreRouter!
- http://github.com/axthe/axthe/blob/main/axtheLib/BasicMData.js

But mostly you'd do standard DB stuff, such as:
- http://npmjs.com/package/@supabase/supabase-js

Here is an example of using supabase:
- https://github.com/axthe/axthe/blob/main/back/lib/SB.js
Supabase has PostgreSQL, user auth and more.