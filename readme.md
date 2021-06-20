
# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper for high productivity webapp development</i>

#### Please star our repo!

Docs ( github ) and the home page: http://docs.axthe.net

### Support
- http://github.com/axthe/axthe/discussions


## About
AXthe aims to be the most productive way to build webapps, including CMS webapps. Specifically it aims to be better than the old productivity leader: LAMP.
 
It is based on the most popular node.js library, express.js. Express.js generator emits a starter webapp using templeting: It uses pug(formerly known as Jade). Pug is templating you already know how to use, it is html markup tags that are self closing! It a fine alternative to PHP.
Check out pug: http://html2pug.vercel.app

The difference between express.js generated Pug examples, is that AXthe is based on a static file approach, it is compliant with JamStack.org. One example of this is an Markdown based CMS http://docsify.js.org, where you edit .md (MarkDown) files. Markdown is just text files. Opposite of our approach for a CMS would be WordPress that does not use flat files: it stores pages in SQL. We are more like Docsify, expect instead of Markdown we use the fully powered Markup: Pug, that allows you to build anything and has express.js back end that you can use full power of node.js npm packages. (Later we will see that JamStack means two subdomains, such as www.mydomain.net and mobile.mydomain.net)
 
AXthe tech stack approach is to eschew client side .js, and rely heavily on SSR. ( I really like the word eschew). The server side route in express.js intercepts the http request and passes any dynamic data to pug. That is 90% of AXthe. In addition to productivity, SSR is better at SEO and security than any client/browser side .js.


### For the impatient
It is recommended you take the guided tour of AXthe. You'll learn that AXthe, in addition to using express.js templating, is based on a static file approach, it is compliant with JamStack.org.
 
It has a convention of always(with some exceptions) naming files as index.pug. That means if you have 3 pages in your webapp, you need 3 folders.
- /public/lading/A/index.pug
- /public/lading/B/index.pug
- /public/lading/C/index.pug
 
Above convention create 3 landing pages alternatives (suitable for testing of marketing variations):
- http://localhost/lading/a
- http://localhost/lading/b
- http://localhost/lading/c

### Starter app
If you are already familiar with AXthe, you can download a starter app:
- http://github.com/axthe/axthe/releases (or http://github.com/axthe/axthe and click Code/Download ZIP)
Unzip. In MyApp rename file envEx to ```.env```. Rename the folder MyApp to the name of your webapp. Running ```d.sh``` should start your app :-).


### Forum

- http://github.com/axthe/axthe/discussions


#### Other links
- http://npmjs.com/package/axthe

