// Global variables
<<<<<<< HEAD
var propertyData = "House ER New 2025";
var locationData = true;
var priceData = 87600;
var endpoint = "http://localhost:8080/crud/index-insert.php";


// DOM objects
var form = document.getElementsByTagName( "form" )[ 0 ];
var formInputs = form.getElementsByTagName( "input" );
var inputProperty = formInputs[ 0 ];
var inputLocation = formInputs[ 1 ];
var inputPrice 	  = formInputs[ 2 ];
var inputSubmit   = formInputs[ 3 ];

=======
var endpoint = "http://localhost:8080/crud/index-insert.php";
var propertyData = "House ER New 2025";
var locationData = true;
var priceData = 87600;

// Alternative way to get DOM elements
// var formInputs = document
// 	.getElementsByTagName( "form" )[ 0 ]
// 	.getElementsByTagName( "input" );
// console.log( formInputs );

// DOM Elements
var inputs = document.getElementsByTagName( "input" );
var inputPropety  = inputs[ 0 ];
var inputLocation = inputs[ 1 ];
var inputPrice 	  = inputs[ 2 ];
var inputSubmit   = inputs[ 3 ];

// EventListeners
>>>>>>> 57883f60af79de940a5887666d5b9d80eca7ce74
inputSubmit.addEventListener( "click", sendData );

// Event Handlers
function sendData( e ) {
	e.preventDefault();
<<<<<<< HEAD
	console.log( inputProperty.value, inputLocation.value, inputPrice.value );
=======
	console.log( inputPropety.value, inputLocation.value, inputPrice.value );
>>>>>>> 57883f60af79de940a5887666d5b9d80eca7ce74

	var xhr = new XMLHttpRequest();
	xhr.open( "POST", endpoint, true );
	xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded; charset=UTF-8" );
<<<<<<< HEAD
	xhr.send( "property=" + inputProperty.value + "&location=" + inputLocation.value + "&price=" + inputPrice.value );
=======
	xhr.send( "property=" + inputPropety.value + "&location=" + inputLocation.value + "&price=" + inputPrice.value );

>>>>>>> 57883f60af79de940a5887666d5b9d80eca7ce74
	xhr.addEventListener( "load", dataLoaded  );
}

function dataLoaded( e ) {
	var jsonData = JSON.parse( e.target.responseText );
	console.log( jsonData );
	form.reset();
}
