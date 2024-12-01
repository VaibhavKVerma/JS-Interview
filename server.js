const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Log when the request is received
  console.log('Request received');

  // Simulate a delay of 200ms for each request
  setTimeout(() => {
    // After 200ms, send a response
    res.write('Request processed');
    res.end();
  }, 200); // This is the simulated delay
});

// The server will listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000...');
});
