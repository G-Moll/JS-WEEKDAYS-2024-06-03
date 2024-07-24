// Async Programming
// AJAX/Callback
// Promises
function fetchDataPromise( cb ) {
	return new Promise( ( resolve ) => {
		setTimeout( function() {
			resolve( [ 1, 19, 20 ] );
		}, 1000 );
	});
}

fetchDataPromise()
	.then( function( msg ) {
		for( var i = 0, l = msg.length; i < l; i++ ) {
			console.log( msg[ i ] );
		}
	})
	;


