require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const router = require('./src/routes/routes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/books', router);

mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection?.once('error', (err) => {
    console.error('Failed to connect to MongoDB:', err);
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
