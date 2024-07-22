const io = require('socket.io')(3000, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
        credentials: true
    }
});

const roomData = {};

io.on('connection', (socket) => {
    console.log('User connected: ' + socket.id);

    socket.on('join', (room) => {
        console.log(`User ${socket.id} joined room ${room}`);
        socket.join(room);
        if (roomData[room]) {
            socket.emit('text-update', roomData[room]);
        } else {
            roomData[room] = ''; 
        }
    });

    socket.on('text-change', ({ room, text }) => {
        console.log(`Text change in room ${room}: ${text}`);
        roomData[room] = text;
        socket.to(room).emit('text-update', text);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected: ' + socket.id);
    });
});
