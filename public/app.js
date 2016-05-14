var updateCountElement = function(count) {
	var countElement = document.querySelector('#count');

	countElement.innerHTML = count;
};

var connect = function() {
	var socket = io();

	socket.on('count', function(count) {
		updateCountElement(count);
	});

	// socket.emit('msg', 'value');
};

var onStartup = function() {
	connect();
};

document.addEventListener('DOMContentLoaded', onStartup);