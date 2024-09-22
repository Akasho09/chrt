const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

// Load SSL certificates (use your paths here)
const options = {
  key: fs.readFileSync(path.join(__dirname, 'certs', 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'certs', 'server.cert'))
};

app.get('/', (req, res) => {
  res.send('Hello, HTTPS world!');
});

// Create an HTTPS server
https.createServer(options, app).listen(3000, () => {
  console.log('HTTPS Server is running on https://localhost:3000');
});

