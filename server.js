const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const apiRoutes = require('./src/routes/apiRoutes');
const transactionRoutes = require('./src/routes/transactionRoutes');
const authRoutes = require('./src/routes/authRoutes');



dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3000;
const BASE_URI = '/api/v1';

app.use(BASE_URI, apiRoutes);
app.use('/api/v1/transactions', transactionRoutes);
app.use('/api/v1/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`BaseURI: http://localhost:${PORT}${BASE_URI}`);
});



