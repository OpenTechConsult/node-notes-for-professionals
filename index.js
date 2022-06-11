// import the top level function of express
const express = require('express');

// create an express application using the top level express function
const app = express();

// define a port number
const port = 3000;

// Routes HTTP GET requests to the specified '/' path with the specified callback function
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Make the app listen on port 3000
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});