
# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper for high productivity webapp development</i>

#### Please star our repo
- http://github.com/axthe/axthe

### Support
- http://github.com/axthe/axthe/discussions

## Setup
If you already have node.js setup, greater than version 14.17.0 (npm greater than 7.18.0), with Caddy http server running in the cloud and a Cloud based IDE, you are good to go, you can skip to guide.


### Pre-requestites
- A DNS name, I recommend http://easydns.com (and I recommend against GoDaddy)
- A $5-$10 / month ubuntu based OS server in the cloud. You can pick anything similar to http://primcast.com, http://vultr.com, http://hetzner.com, http://soyoustart.com, Digital Ocean, Linode, etc. Likely that anything Ubuntu in the cloud will work.


## Recipe
After you create an Ubuntu machine in the cloud, run the setup script: http://github.com/AXthe/AXthe/blob/main/setup.sh

You should edit in the cloud, sign up for a free VS Code cloud based IDE/editor,  I recommend http://codeanywhere.com/editor. For SSR mostly use the Cloud IDE, and for Jamstack/CORS you can use local VS Code, but don't need to.

You can cust paste the script above: http://github.com/axthe/axthe/blob/main/setup.sh 

(or you can try #wget -O - https://raw.githubusercontent.com/axthe/axthe/main/setup.sh | bash )

Then create Caddyfile similar to this:
http://github.com/axthe/axthe/blob/main/Caddyfile

and
```
caddy start
```

### And last:
- Download http://github.com/axthe/axthe/releases (or BETTER, for latest: http://github.com/axthe/axthe and click Code/Download ZIP)

Lets start the second app first. The Caddyfile should point direct to CORS/www and if you run.sh in the CORS you should be able to develop locally.
For SSR app should use a proxy setting, as per examples in Caddyfile, and you can go to SSRapp folder. In my1SSRapp folder rename file envEx to ```.env```. Running ```d.sh``` should start your SSR app :-).

The DNS subdomains should point to Caddyfile subdomains/ports.

### Optional as needed
ufw status
killall node
ps aux | grep node
nvm alias default 14.17.1
```

```
