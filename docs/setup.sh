# setup cady, node and AXthe

apt-get update
apt-get upgrade
apt install unzip

# node app server via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install 14.17.0
npm i -g npm
# install a tester for node
npm i -g faucet

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