'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();



app.get('/', function (req, res) {
  res.send('Middleware server is running on port \n' + PORT);
});

app.get('/login', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify('{\"success\": true,\"payload\":{user:madhu}} \n'));
});


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
