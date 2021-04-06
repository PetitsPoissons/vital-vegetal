require('dotenv').config(); // access variables set in the .env file via `process.env.VARIABLE_NAME` syntax
const express = require('express');
const connectDB = require('./config/connection');
const cors = require('cors');

// Create the Express app
const app = express();

// Connect to MongoDB
connectDB();

// Attach the middleware
app.use(cors()); // this allows http requests to servers with different domain names (we are going back and forth between localhost:3000 and localhost:5000 for our http requests)
app.use(express.json()); // body parser - allows us to access req.body

// Attach the routes
app.use('/api/users', require('./routes/users'));
app.use('/api/recipes', require('./routes/recipes'));
app.use('/api/ingredients', require('./routes/ingredients'));

// This code will only run if we are in production
if (process.env.NODE_ENV === 'production') {
  // Make sure that Express will serve up our production assets such as our main.js file, or main.css file
  app.use(express.static('client/build'));

  // Set up so that Express will serve up the index.html file if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
