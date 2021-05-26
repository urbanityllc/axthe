
# An eXpress.js and Templating HElper (AXTHE)
<i>AXTHE tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper for high productivity webapp development</i>

#### Please star our repo:
- http://github.com/axthe/axthe

### Support:
- http://github.com/axthe/axthe/discussions



https://codeanywhere.com/editor


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
:9090
reboot

stop caddy service

ufw status

easydns https://cp.easydns.com/manage/domains/zone/

killall node
ps aux | grep node