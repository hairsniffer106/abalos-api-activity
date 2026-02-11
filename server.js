<<<<<<< HEAD
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const apiRoutes = require('./src/routes/apiRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3000;
const BASE_URI = '/api/v1';

app.use(BASE_URI, apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`BaseURI: http://localhost:${PORT}${BASE_URI}`);
});



=======
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';


const apiRoutes = require('./src/routes/apiRoutes');
app.use(BASE_URI, apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Base URI:http://localhost:${PORT} ${BASE_URI}`);
});
>>>>>>> e0cba2e09c143d475ea54578aaeb740caf7a424b
