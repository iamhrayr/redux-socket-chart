const express = require('express');
const app = express();
// const http = require('http').Server(app);
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

http.listen(3001, "127.0.0.1");

// Middlewares
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


// Socket.io
io.on('connection', function(socket){
    console.log('a user connected', socket);
});

// // Run the server listener
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log('server started on the port', PORT);
// });

