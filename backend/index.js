// backend/index.js

const express = require('express'); // Import the express library
const app = express();              // Create an instance of the express application
const port = 3000;                  // Define the port the server will listen on

// Define a basic route for the root URL
app.get('/', (req, res) => {
  res.send('Hello from My Website Project!'); // Send a simple response
});

// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`My Website Project listening at http://localhost:${port}`);
});