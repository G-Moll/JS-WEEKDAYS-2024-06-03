// Async Programming
// async/await

async function displayData() {
	let promise = new Promise( function( resolve ) {
		// await
		setTimeout( function() {
			let data = [ { name: "Joshua" }, { name: "Peter" }, { name: "Paul" } ];
			resolve( data );
		}, 3000 );
	} );
	console.log( "Esperando datos" );
	console.log( await promise );
	console.log( "Los datos han llegado" );
}
displayData();

