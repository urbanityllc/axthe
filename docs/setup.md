
# An eXpress.js and Templating HElper (AXTHE)
<i>AXTHE tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper for high productivity webapp development</i>

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

# node 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install 14.16.1
npm i -g npm

# caddy http 
apt install cockpit
# https://caddyserver.com/docs/install#debian-ubuntu-raspbian
apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo apt-key add -
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee -a /etc/apt/sources.list.d/caddy-stable.list

apt update
apt install caddy
stop caddy service
reboot

# when you come back

ufw status

# optional
killall node
ps aux | grep node

```

Now you can edit the Caddyfile in the cloud, with a cloud based IDE/editor such as already mentioned http://codeanywhere.com/editor .

### Github
If you wish to use local development + Github + SFTP/SSH you should use VS Code IDE.

