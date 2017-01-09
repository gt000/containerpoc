var http = require('http'),crypto = require('crypto');


var privateKey = process.env.NODE_KEY;
var certificate = process.env.NODE_CRT;

var credentials = crypto.createCredentials({key: privateKey, cert: certificate});

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

server.setSecure(credentials);
server.addListener("request", handler);
// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8080);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8080/");
