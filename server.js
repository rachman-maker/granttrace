const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const FILE_PATH = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  // Always serve index.html for all routes or root
  fs.readFile(FILE_PATH, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Error reading index.html');
      return;
    }
    res.writeHead(200, { 
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache'
    });
    res.end(content);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`=======================================================`);
  console.log(` GrantTrace Web Server Aktif`);
  console.log(` Local:   http://localhost:${PORT}`);
  console.log(` Network: http://10.10.9.8:${PORT}`);
  console.log(` File:    ${FILE_PATH}`);
  console.log(`=======================================================`);
});
