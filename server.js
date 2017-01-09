var express = require( 'express' )
    , https = require("https")
    , fs = require( 'fs' );

var privateKey = process.env.NODE_KEY;
var certificate = process.env.NODE_CRT;

var options = {key: privateKey, cert: certificate};

var app = express.createServer();


app.get('/', function (req, res) {
  res.send('Middleware server is running on port \n' + PORT);
});


https.createServer( options, function(req,res)
{
    app.handle( req, res );
} ).listen( 8080 );
