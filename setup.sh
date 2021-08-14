#!/bin/bash
# setup cady, node and AXthe:

apt update
apt upgrade -y

apt install python3.9 -y
apt install python3-pip -y
alias python='python3'
apt install build-essential -y
apt install unzip -y
apt install git -y
apt install openssh-client -y
python --version

# caddy http server
# https://caddyserver.com/docs/install#debian-ubuntu-raspbian
apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo apt-key add -
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee -a /etc/apt/sources.list.d/caddy-stable.list
apt update
apt install caddy -y
apt upgrade -y
caddy stop

apt dist-upgrade -y
# reboot
alias python='python3'

apt install cockpit -y
# above is a monitoring server, read https://cockpit-project.org/documentation.html
# for now it is ok to accept a bad cert, you can fix it w/ Caddy+DNS later via proxy to port 9090 to monitor your OS

# node app server via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install 14.17.3 -y
nvm alias default node
npm i -g npm
npm -v

npm i -g snowpack@3.7.0
npm install -g cordova
# install a tester for node:
npm i -g colortape
npm install -g node-gyp

# just a clean up step
apt autoremove -y

# get AXthe starter, and unzip
#wget https://github.com/axthe/axthe/archive/refs/heads/main.zip
#unzip main.zip
#rm *.zip

# optional, if you install PHP, install latest v7, not v8
apt -y install php7.4
php -v
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
composer self-update
