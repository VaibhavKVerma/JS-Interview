const http = require('http');

// Send 1000 concurrent requests
for (let i = 0; i < 1000; i++) {
  http.get('http://localhost:3000', (res) => {
    let data = '';

    // Collect the response data
    res.on('data', (chunk) => {
      data += chunk;
    });

    // Log the response when the request finishes
    res.on('end', () => {
      console.log(`Response received: ${data}`);
    });
  }).on('error', (err) => {
    console.log('Error with request:', err);
  });
}
