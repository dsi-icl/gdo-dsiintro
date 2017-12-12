
	/** Connect to socket.io */	
	var socket = io( );
	socket.on('connect', function(data) {
		socket.emit('join', 'DSIintro: Control connected');
	});


	/** Attach actions to buttons */
	document.getElementById('show_mission').onclick = function() {
		socket.emit('messages', "mission");
		return false;
	};

	document.getElementById('show_faculties').onclick = function() {
		socket.emit('messages', "faculties");
		return false;
	};

	$('.btn').click( function() {
		$(this).toggleClass('selected').siblings().removeClass('selected'); //remove selection from others
		if( $(this).hasClass('selected')  ){
			socket.emit('messages', $(this).data('value') ); // go to selected content
		}
		else {
			socket.emit('messages', 'dsi');	//if nothing is selected, go to default content
		}
	});
