var holderProperties = document.getElementById( 'holder-properties' );
// console.log( holderProperties );

// AJAX
// Asynchrnous JavaScript And XML

var endpoint = "http://localhost:8080/crud/index-select.php";
var xhr = new XMLHttpRequest();
xhr.open( "GET", endpoint, true );
xhr.send();

xhr.addEventListener( "load", loadSelectedData  );

function loadSelectedData( e ) {
	var jsonData = JSON.parse( e.target.responseText );

	var htmlData = "";
	for( var i = 0; i < jsonData.data.length; i++ ) {
		var currentRow = jsonData.data[ i ]; 
		htmlData += "<div class='property-details'>" +
			"<h3>" + currentRow.property + "</h3>" +
			"<img src='imgs/" + "thumbnail.jpg" + "''>" +
			"<p>ID: " + currentRow.id + "</p>" +
			"<p>Location: " + currentRow.location + "</p>" +
			"<p>Price: " + currentRow.price + "</p>" +
			"<button>Comprar</button>" +
		"</div>";
	}
	holderProperties.innerHTML = htmlData;
	// console.log( htmlData );
	// console.log( jsonData );
}


