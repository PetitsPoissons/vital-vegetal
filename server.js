require('dotenv').config(); // access variables set in the .env file via `process.env.VARIABLE_NAME` syntax
const express = require('express');
const connectDB = require('./config/connection');
const morgan = require('morgan');
const cors = require('cors');

// Create the Express app
const app = express();

// Connect to MongoDB
connectDB();

// Attach the middleware
app.use(morgan('dev')); // dev help debug
app.use(cors()); // this allows http requests to servers with different domain names (we are going back and forth between localhost:3000 and localhost:5000 for our http requests)
app.use(express.json()); // body parser - allows us to access req.body

// Attach the routes
app.use('/api/users', require('./routes/users'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
