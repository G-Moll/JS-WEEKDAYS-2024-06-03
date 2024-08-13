import { AJAXRequest } from "../models/client/AJAXRequest.js";

var requestSelectAll = new AJAXRequest( "GET", "http://localhost:8080/crud/select-all.php", loadSelectedData );
requestSelectAll.send();

function loadSelectedData( e ) {
	var holderProperties = document.getElementById( 'holder-properties' );
	var jsonData = JSON.parse( e.target.responseText );

	var htmlData = "";
	for( var i = 0; i < jsonData.data.length; i++ ) {
		var currentRow = jsonData.data[ i ]; 
		htmlData += "<h3>" + currentRow.property + "</h3>" +
		"<p>ID: " + currentRow.id + "</p>" +
		"<p>Location: " + currentRow.location + "</p>" +
		"<p>Price: " + currentRow.price + "</p>" +
		"<button>Comprar</button>";
	}
	holderProperties.innerHTML = htmlData;
}

export { requestSelectAll }
