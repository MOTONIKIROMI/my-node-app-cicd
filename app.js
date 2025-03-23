const http = require('http');

const host = '0.0.0.0'; // Listen on all interfaces
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, custome Docker!\n');
});

server.listen(port, host, () => {
  console.log(`Server running at http://<span class="math-inline">\{host\}\:</span>{port}/`);
});
