#!/bin/bash
# setup cady, node and AXthe:

apt-get update
apt-get upgrade -y
apt-get dist-upgrade -y
# reboot

apt-get install python3.9 -y
apt-get install python3-pip -y
alias python='python3'
apt-get install build-essential -y
apt-get install unzip -y
apt-get install git -y
apt-get install openssh-client -y

# node app server via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install 14.17.3 -y
nvm alias default node
npm i -g npm
npm -v

npm install -g cordova
# install a tester for node:
npm i -g colortape
npm i -g yarn

# caddy http server
# https://caddyserver.com/docs/install#debian-ubuntu-raspbian
apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo apt-key add -
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee -a /etc/apt/sources.list.d/caddy-stable.list
apt update
apt install caddy -y
caddy stop

apt install cockpit -y
# above is a monitoring server, read https://cockpit-project.org/documentation.html
# for now it is ok to accept a bad cert, you can fix it w/ Caddy later via proxy to port 9090 to monitor your OS

# just a clean up step
apt autoremove -y

# get AXthe starter, and unzip
wget https://github.com/axthe/axthe/archive/refs/heads/main.zip
unzip main.zip
rm *.zip

# optional, if you install PHP, install latest v7, not v8
apt -y install php7.4
php -v
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
composer self-update
