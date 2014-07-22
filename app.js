var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

// Config
require('./config')(app);

// Routes
require('./routes')(app);




server.listen(app.get('port'));
console.log('server listening on port ' + app.get('port'));


module.exports = app;
