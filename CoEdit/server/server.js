const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Import the cors package

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
        credentials: true
    }
});

app.use(cors({ 
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

const roomData = {};
const rooms = new Set();

io.on('connection', (socket) => {
    console.log('User connected: ' + socket.id);

    socket.on('join', (room) => {
        socket.join(room);
        rooms.add(room);
        if (roomData[room]) {
            socket.emit('text-update', roomData[room]);
        } else {
            roomData[room] = ''; // Initialize with empty content if the room doesn't exist
        }
    });

    socket.on('text-change', ({ room, text }) => {
        roomData[room] = text;
        socket.to(room).emit('text-update', text);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected: ' + socket.id);
    });
});

app.get('/rooms', (req, res) => {
    res.json([...rooms]);
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
