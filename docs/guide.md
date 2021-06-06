
# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper for high productivity webapp development</i>

#### Please star our repo
- http://github.com/axthe/axthe

### Support
- http://github.com/axthe/axthe/discussions


## Guide

Pre-requsite knowledge ahed of AXthe is reading this book: HTML and CSS: Design and Build Websites by Jon Duckett

Download a starter app:
- <a href="starter.zip">starter.zip</a>
Unzip. Rename the folder starter to the name of your webapp.

You can start via x.sh in the unzip folder:

Notice the layout of the public folder storing pug(html), and that pug is almost allways called index.pug

And the PreRouter: 
https://github.com/axthe/axthe/tree/main/docs/starter/lib
#### A PreRouter is used to intercept the http request and populate the data for pug templates!

Everthing is just standard express.js, the most popular node.js module:
- http://github.com/expressjs/express
In fact, if you use express.js generator you'll get something similar to the starter.zip that you unziped. Just like the express.js example, AXthe favors SSR.

Good so far?

## Next steps
- Example Caddyfile: http://github.com/axthe/axthe/blob/main/Caddyfile
- Recommend CSS 'framework' is classless: http://github.com/axthe/axthe/tree/main/docs/starter/public/assets/css
- Recommended Menu, easy to customize: http://github.com/axthe/axthe/tree/main/docs/starter/public/assets/cssNav
About the menu, sooner or later your are going to have to spend a day to learn it. So much of your apps UX is related to Nav.

Via AXthe lib you can get a list of pages in a subfolder, to use in your PreRouter!
- http://github.com/axthe/axthe/blob/main/axtheLib/BasicMData.js

But mostly you'd do standard DB stuff, such as:
- http://npmjs.com/package/@supabase/supabase-js

Here is an example of using supabase:
- https://github.com/axthe/axthe/blob/main/full/lib/SB.js
Supabase has PostgreSQL, user auth and more.

- Express template AXthe is based on: https://gist.github.com/cekvenich2/a4764a1946356e387b6d47d988b5050a

