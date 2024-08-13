import { AJAXRequest } from "./models/client/AJAXRequest.js";

var request = new AJAXRequest( "GET", "http://localhost:8080/crud/index-select.php", loadedData );
request.send();

function loadedData( e ) {
	console.log( e.target.responseText );
}
