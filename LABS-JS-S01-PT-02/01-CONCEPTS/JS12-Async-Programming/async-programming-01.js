// Async Programming
// AJAX/Callback
// Promises
function fetchData( cb ) {
	setTimeout( function() {
		cb( [ 1, 19, 20 ] );
	}, 1000 );
}

fetchData( function( msg ) {
	for( var i = 0, l = msg.length; i < l; i++ ) {
		console.log( msg[ i ] );
	}
});

