# An eXpress.js and Templating HElper (AXthe)
<i>AXthe tech stack is <b>A</b>n opinionated e<b>X</b>press.js and <b>T</b>emplating <b>HE</b>lper(AXthe) for high productivity web app development</i>.
 
#### Please star our repo
- http://github.com/axthe/axthe

#### Support and Forum
- http://github.com/axthe/axthe/discussions


# Setup
If you already have node.js setup, greater than version 14.17.1 (npm greater than 7.18.0), with Caddy http server running in the cloud and a Cloud based IDE, you are good to go, you can skip to guide.

- For latest: http://github.com/axthe/axthe and click Code/Download ZIP), or use wget from shell to download the file.
In MyAapp folder rename file envEx to ```.env```. Running ```r.sh``` should start your SSR app :-).


### Pre-requestites
- You need A DNS name/domain, I recommend http://easydns.com or Porkbun.com (and I recommend against GoDaddy).
- A $5-$10 / month ubuntu based OS server in the cloud. You can pick anything similar to http://primcast.com, http://vultr.com, http://hetzner.com, http://soyoustart.com, Digital Ocean, Linode, etc. Likely that anything Ubuntu in the cloud will do the job.


## Recipe
After you create an Ubuntu instance in the cloud:
You should edit in the cloud, sign up for a cloud based IDE, I recommend http://codeanywhere.com/editor. For SSR mostly use a Cloud IDE, and for JAMstack or mobile|cordova development you chould use local VS Code.

- Step number one, using the Cloud IDE (CodeAnywhere) after you open the IDE, connect to the Ubunty instance in the cloud via ssh. You should see the editor and be able to ssh. Like this:

[<img src="ide.png" />]

And this is the screen to setup the connection, select ssh:
[<img src="ide_setup.png" width="400"/>]


- Step number two:

 run the setup script: http://github.com/AXthe/AXthe/blob/main/setup.sh

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


## How to update to a newer version of AXthe tech stack

From time to time we update our stack and scripts, including the setup scripts.



### Optional as needed

```
ufw status

killall node

ps aux | grep node

nvm alias default 14.17.1
```
