
# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper for high productivity webapp development</i>

#### Please star our repo:
- http://github.com/axthe/axthe

### Support:
- http://github.com/axthe/axthe/discussions

## Setup
If you already have node.js setup, greater than version 14, and have Caddy http server running in the cloud, you are good to go, you can skip to guide. But I recommend you glance it.

### Pre-requestites
- A DNS name, I recommend http://easydns.com (and I recommend against GoDaddy)
- A $5-$10 / month ubuntu based OS server in the cloud. You can pick anything similar to http://primcast.com, http://vultr.com, http://hetzner.com, etc. Likely that anything in the cloud will work.
- Sign up for an IDE/editor to edit code in the cloud (unless you are SSH and Vim expert) http://codeanywhere.com/editor . 

## Recipe
```
apt-get update
apt-get upgrade
apt install unzip

# node app server via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install 14.17.0
npm i -g npm

# caddy http server
# https://caddyserver.com/docs/install#debian-ubuntu-raspbian
apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo apt-key add -
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee -a /etc/apt/sources.list.d/caddy-stable.list
apt update
apt install caddy
caddy stop

apt install cockpit
# above is a monitoring server, read https://cockpit-project.org/documentation.html
# for now it is ok to accept a bad cert, you can fix it w/ Caddy later via proxy to port 9090


# get AXthe starter, and unzip
wget https://axthe.github.io/axthe/starter.zip
unzip starter.zip
mv starter myApp

reboot
```

Now you can edit, for example the Caddyfile, in the cloud, with a cloud based IDE/editor such as already mentioned http://codeanywhere.com/editor, recommended!

```
# when you come back
ufw status
cd myApp
./x.sh

# optional
killall node
ps aux | grep node
```
Of course you should used a cloud IDE such CodeAnywhere to edit pug files!
