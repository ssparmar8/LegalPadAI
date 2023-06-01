

cd /var/www/react-app

kill $(lsof -t -i:3000)

serve build
