const io = require('socket.io')(3000, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log(socket.id);
});
