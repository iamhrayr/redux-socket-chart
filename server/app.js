const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const _ = require('lodash');
const shortid = require('shortid');

http.listen(3001, "127.0.0.1");

// Middlewares
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// get static coordinates
app.get('/charts', (req, res) => {
    let generateRandomData = () => Array.from({length: 10}, () => _.random(0,100));
    let data = [{
        id: shortid.generate(),
        live: false,
        points: generateRandomData()
    },{
        id: shortid.generate(),
        live: false,
        points: generateRandomData()
    },{
        id: shortid.generate(),
        live: false,
        points: generateRandomData()
    }]
    res.send(data);
});

// Socket.io
io.on('connection', (socket) => {
    setInterval(() => {
        io.emit('add point', _.random(0,100)
    )}, 2000)
});