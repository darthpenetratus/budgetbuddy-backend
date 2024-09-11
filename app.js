const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('./routes/user');
const transactionRoutes = require('./routes/transaction');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);

module.exports = app;