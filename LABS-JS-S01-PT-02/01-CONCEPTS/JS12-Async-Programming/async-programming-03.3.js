// Async Programming
// async/await
// Promises, XMLHttpRequest

function fetchData( url ) {
	return new Promise( ( resolve, reject ) => {
		let xhr = new XMLHttpRequest();
		xhr.open( "GET", url, true );
		xhr.addEventListener( "load", function( e ) {
			if( xhr.status >= 200 &&  xhr.status < 300 ) {
				resolve( xhr.responseText );
			}
			else {
				reject( "Data no found" );
			}
		}); 
		xhr.send();
	} );
}

async function getData() {
	try {
		let url = "https://jsonplaceholder.typicode.com/users";
		console.log( "Waiting for data..." );
		let data = await fetchData( url );
		console.log( JSON.parse( data ) );
		console.log( "Data has arrived..!" );
	}
	catch( e ) {
		console.log( e.message );
	}
}
getData();


