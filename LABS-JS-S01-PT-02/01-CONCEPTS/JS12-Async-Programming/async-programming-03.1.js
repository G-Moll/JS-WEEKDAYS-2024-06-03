// Async Programming
// async/await

// Asignar el comportamiento async a un funcion
const fetchDataPromise = async () => {
	// Esperar a que un request se termine (await)
	const data = await fetchData();
	console.log( data );
};

fetchDataPromise();





// function fetchDataPromise( cb ) {
// 	return new Promise( ( resolve, reject ) => {
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
// 	.catch( function() {})
// 	;


