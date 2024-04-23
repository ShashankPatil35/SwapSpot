const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const userPayments = require('./routes/userPayments');
const notificationRoutes = require('./routes/notificationRoutes'); // Import notification routes
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);

// Enable CORS
app.use(cors());

app.use(express.json());
app.use('/users', userRoutes);
app.use('/payments', userPayments);
app.use('/notifications', notificationRoutes); // Use notification routes

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
