# clazz-room

Collaborative class room application which can use to publish questions and answers real time to inprove the performance inside a class room.  
This application based on socket.io and uses websockets to implement real time communication between peers.  
>Note: This program stores questions in memory

# How to run
Install [node.js](https://nodejs.org/en/)  
Clone repository
```
git clone https://github.com/randilfernando/clazz-room.git
```
Install dependencies and run project
```
npm install
npm run start
```
Goto [http://localhost:3000](http:localhost:3000) using your favourite browser.

# Update web client
See [clazz-room-web](https://github.com/randilfernando/clazz-room-web) for web front end implementation.  
If you changed web front end project build project and add build files into **public** folder to run the server with the latest user interface.