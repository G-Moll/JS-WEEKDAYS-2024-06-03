// AJAX
// Asynchrnous JavaScript And XML

var endpoint = "http://localhost:3000/data/real-estate-properties.json";
// var endpoint = "https://jsonplaceholder.typicode.com/users";
var xhr = new XMLHttpRequest();
xhr.open( "GET", endpoint, true );
xhr.send();

xhr.addEventListener( "load", dataLoaded  );

function dataLoaded( e ) {
	console.log( JSON.parse( e.target.responseText ) );
}


