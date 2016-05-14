var http = require('http');
var path = require('path');
var express = require('express');

var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);
app.use(express.static(path.join(__dirname, 'public')));

var count = 0;

io.on('connection', function(socket) {
	console.log('one client is connected');
	socket.emit('messageKey', {
		msg: 'OMG'
	});
});

setInterval(() => {
	io.emit('count', count++);
}, 1000);

server.listen(3000, function(err) {
	if (err) {
		console.err(err);
		return;
	}

	console.log('listening on port 3000');
});