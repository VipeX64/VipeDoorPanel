// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);
// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   socket.on('send message', msg => {
//     io.emit('send message', msg);
//   });

// });

// http.listen(port, () => {
//   console.log(`Socket.IO server running at http://localhost:${port}/`);
// });
const app = require('express')();
const port = process.env.PORT || 3001;
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
// io.on('connection', (socket) => {
//   console.log('user connected');
//   socket.on('send message', msg => {
//     io.emit('send message', msg);
//   });
// });

app.post("/abc", (req, res) => {
  let data = req.body.test;
  console.log(data);
  res.send(data);
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});