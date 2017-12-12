
/** Load all dependencies */
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');

/** Indicate some routes */
//app.use(express.static(__dirname + '/node_modules'));  //make only this available
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/js'));
app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/static/blank.html');
});



/** This is the url with the control panel */
app.get('/control', function(req, res, next) {
	res.sendFile(__dirname + '/control.html');
});

/**
Five urls are needed with the contents. In this project:
 - Screens 0,1 and 4 have a static url
 - Screens 2 and 3 will change the url
*/
let screen = fs.readFileSync(__dirname + '/screen.html', 'utf8');
app.get('/0', function(req, res, next) {
  res.sendFile(__dirname + '/static/0.html');
});
app.get('/1', function(req, res, next) {
  res.sendFile(__dirname + '/static/1.html');
});
app.get('/2', function(req, res, next) {
  res.send(screen.replace('SCREENNUMBER','2'));
});
app.get('/3', function(req, res, next) {
  res.send(screen.replace('SCREENNUMBER','3'));
});
app.get('/4', function(req, res, next) {
  res.sendFile(__dirname + '/static/4.html');
});


/** Connect the pages with socket.io */
io.on('connection', function(client) { 
    var clientIP = client.request.connection.remoteAddress;
    console.log('Client '+ clientIP +' connected...');

    client.on('join', function(data) {
		    client.emit('messages', 'Hello from server');
    });

    client.on('messages', function(data) {
      console.log("[SERVER] "+ data);
        client.emit('broad', data);
        client.broadcast.emit('broad',data);
    });
});

/** Start the server listening*/
server.listen(process.env.PORT || 4200);
