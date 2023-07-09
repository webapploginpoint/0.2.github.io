const express = require('express');
const app = express();

// Parse JSON and form data in the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle POST request for receiving messages
app.post('/messages', (req, res) => {
    const message = req.body.message;

    // Process the received message (e.g., store it, send it to other users, etc.)
    // Code for processing the message goes here

    res.sendStatus(200); // Send a response status indicating success
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});