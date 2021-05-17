#!/bin/bash

echo $0

sudo fuser -k 5555/tcp 
redis-server ./redis/config &
sudo fuser -k 4000/tcp 


sudo systemctl start mongod.service & 
firefox  http://localhost:4000/ &
nodemon index.js 
