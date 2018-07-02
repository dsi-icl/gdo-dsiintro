
	/** Connect to socket.io */	
	var socket = io({path: '/demos/dsiintro/socket.io'});
	socket.on('connect', function(data) {
		socket.emit('join', '[Screen ' + screen + ']: connected');
	});


	// when we receive a message, change the iframe content accordingly
	socket.on('broad', function(data) {
		switch(data){
			case 'dsi':
			case 'dataman':
			case 'ml':
			case 'assimilation':
			case 'business':
			case 'social':
			case 'economy':
			case 'behaviour':
			case 'privacy':
		 		console.log("Changing to " + data);
		 		var dest = "LAB_" + data + "/" + screen + ".html";
		 		document.getElementById('targetframe').setAttribute('src', dest);
		 		break;
		 	case 'mission':
		 	case 'faculties':
		 		break;
	 	}
	 });
