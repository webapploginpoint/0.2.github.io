const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Handle incoming connections
io.on('connection', function(socket) {
    console.log('A user connected');

    // Handle incoming messages
    socket.on('chat message', function(data) {
        // Broadcast the message to all connected clients
        io.emit('chat message', {
            sender: socket.id,
            message: data.message
        });
    });

    // Handle disconnections
    socket.on('disconnect', function() {
        console.log('A user disconnected');
    });
});

// Start the server
const PORT = 3000;
http.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`);
});
