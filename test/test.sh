#!/bin/bash

port=$(lsof -ti tcp:3000);
if [ ! -z $port ]
then 
  echo "Killing Server Process on tcp:3000"
  kill -9 ${port}
fi

node index.js &
SERVER_PID=$!;
echo "SERVER_PID: ${SERVER_PID}"


./node_modules/.bin/mocha --reporter spec --exit ./test/*.spec.js
EXIT_CODE=$?
kill $SERVER_PID

echo "EXIT $EXIT_CODE"
(exit $EXIT_CODE)



