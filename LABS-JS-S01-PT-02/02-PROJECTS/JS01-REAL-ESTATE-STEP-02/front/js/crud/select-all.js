import { AJAXRequest } from "../models/client/AJAXRequest.js";
import { endpointsList } from "../config/endpointsList.js";
import { holderProperties } from "../config/domElements.js";

var requestSelectAll = new AJAXRequest(
	"GET",
	endpointsList.endpointBuild( "properties", "select-all" ),
	loadSelectedData
);
requestSelectAll.send();

function loadSelectedData( e ) {
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
