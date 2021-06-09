
clear
npm i -g npm
npm i -g npm-check-updates
npm i -g npm-run-all
ncu
npm i

# uses nodemon to monitor js in lib and startCss to monitorSass
npm-run-all --parallel watchSass watchNode

