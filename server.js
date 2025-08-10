const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const bookRoutes = require('./routes/book');
app.use('/api/books', bookRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
