//const https = require('https');
const https = require('https'),
      fs = require('fs');

const options = {
  key: fs.readFileSync('/opt/app-root/secret-volume/tls.key'),
  cert: fs.readFileSync('/opt/app-root/secret-volume/tls.crt')
};
console.log('key');
console.log(process.env.NODE_KEY);
console.log('crt');
console.log(process.env.NODE_CRT);

https.createServer(options, (req, res) => {
//http.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8080);
