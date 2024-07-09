// Global variables
var endpoint = "http://localhost:8080/crud/index-insert.php";
var propertyData = "House ER New 2025";
var locationData = true;
var priceData = 87600;

// DOM Elements
var inputs = document.getElementsByTagName( "input" );
var inputPropety  = inputs[ 0 ];
var inputLocation = inputs[ 1 ];
var inputPrice 	  = inputs[ 2 ];
var inputSubmit   = inputs[ 3 ];

// EventListeners
inputSubmit.addEventListener( "click", sendData );

// Event Handlers
function sendData( e ) {
	e.preventDefault();
	console.log( inputPropety.value, inputLocation.value, inputPrice.value );

	var xhr = new XMLHttpRequest();
	xhr.open( "POST", endpoint, true );
	xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded; charset=UTF-8" );
	xhr.send( "property=" + inputPropety.value + "&location=" + inputLocation.value + "&price=" + inputPrice.value );

	xhr.addEventListener( "load", dataLoaded  );
}

function dataLoaded( e ) {
	var jsonData = JSON.parse( e.target.responseText );
	console.log( jsonData );
}
