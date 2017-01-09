const https = require('https');

const options = {
  key: process.env.NODE_KEY,
  cert: process.env.NODE_CRT
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8080);
