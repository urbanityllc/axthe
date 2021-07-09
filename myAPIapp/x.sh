echo 'production/backgorund process:'
# nohup node ./lib/wapp.js &
pm2 start ./lib/wapp.js
