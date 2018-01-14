const ioInit = require('./app/controllers/main');

const app = require('http').createServer();
const io = require('socket.io')(app);

app.listen(3000, () => {
  console.log('server is listening on http://localhost:3000');
})

io.set('origins', '*:*');
ioInit(io);