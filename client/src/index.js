import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

socket.on('connect', (s) => {
    console.log('connected to the socket', s);
});

setInterval(() => {
    socket.emit('chat message', Math.random());
}, 1000)

// console.log('testing')