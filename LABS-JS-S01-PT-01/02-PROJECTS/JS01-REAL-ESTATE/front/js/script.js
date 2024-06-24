var holderProperties = document.getElementById( 'holder-properties' );
// console.log( holderProperties );

// AJAX
// Asynchrnous JavaScript And XML

var endpoint = "http://localhost:3000/data/real-estate-properties.json";
// var endpoint = "https://jsonplaceholder.typicode.com/users";
var xhr = new XMLHttpRequest();
xhr.open( "GET", endpoint, true );
xhr.send();

xhr.addEventListener( "load", dataLoaded  );

function dataLoaded( e ) {
	var jsonData = JSON.parse( e.target.responseText );

	var htmlData = "";
	for( var i = 0; i < jsonData.data.length; i++ ) {
		var currentRow = jsonData.data[ i ]; 
		htmlData += "<h3>" + currentRow.property + "</h3>" +
		"<p>Location: " + currentRow.location + "</p>" +
		"<p>Price: " + currentRow.price + "</p>" +
		"<button>Comprar</button>";
	}
	holderProperties.innerHTML = htmlData;
	console.log( htmlData );
}


