
# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper for high productivity webapp development</i>

#### Please star our repo
- http://github.com/axthe/axthe

### Support
- http://github.com/axthe/axthe/discussions

## Setup
If you already have node.js setup, greater than version 14, and have Caddy http server running in the cloud, you are good to go, you can skip to guide.


### Pre-requestites
- A DNS name, I recommend http://easydns.com (and I recommend against GoDaddy)
- A $5-$10 / month ubuntu based OS server in the cloud. You can pick anything similar to http://primcast.com, http://vultr.com, http://hetzner.com, http://soyoustart.com, Digital Ocean, Linode, etc. Likely that anything in the cloud will work



## Recipe
After you create a linux in the cloud, run the setup script (from this github/docs) to install Caddy, node, etc. 

You should edit in the cloud, sign up for a cloud based IDE/editor,  I recommend http://codeanywhere.com/editor!

You can cust paste the script above: http://github.com/axthe/axthe/blob/main/docs/setup.sh 

(or you can wget -O - https://raw.githubusercontent.com/axthe/axthe/main/docs/setup.sh | bash )

Then create Caddyfile similar to this:
http://github.com/axthe/axthe/blob/main/Caddyfile

and
```
caddy start
```
The DNS subdomains should point to caddy subdomains! I use EASYdns.

## PrePros.io
- has a (weinre) mobile app debugger, facilitating movile first. In any case your FE apps should be compatible witn PrePros.io


### Optional as needed
ufw status
killall node
ps aux | grep node
```
cd myApp
./d.sh
```

## VS Code short cut:
Control Shift P, > for commands else search for file name

