

cd /var/www/react-app

kill $(lsof -t -i:3000)

nohup serve -s build &
