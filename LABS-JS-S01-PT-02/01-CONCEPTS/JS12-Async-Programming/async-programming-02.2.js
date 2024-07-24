// Async Programming
// AJAX/Callback
// Promises

// Promisefying: xhr
let customPromise = new Promise( ( resolve, reject ) => {
	let xhr = new XMLHttpRequest();
	xhr.open( "GET", "https://jsonplaceholder.typicode.com/users", true );
	xhr.onload = function() {
		if( xhr.status >= 200 && xhr.status < 300 ) {
			resolve( xhr.responseText );
		}
		else{
			reject( "Data no  found" );
		}
	}
	xhr.send();
});

customPromise
	.then( ( data ) => {
		console.log( data )
	 })
	.catch( ( error ) => { console.log( error );  } );

// function(){}









// function fetchDataPromise( cb ) {
// 	return new Promise( ( resolve ) => {
// 		setTimeout( function() {
// 			resolve( [ 1, 19, 20 ] );
// 		}, 1000 );
// 	});
// }

// fetchDataPromise()
// 	.then( function( msg ) {
// 		for( var i = 0, l = msg.length; i < l; i++ ) {
// 			console.log( msg[ i ] );
// 		}
// 	})
// 	;


