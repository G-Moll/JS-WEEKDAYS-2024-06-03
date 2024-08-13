// Global variables
var endpoint = "http://localhost:8080/crud/index-select-one.php";
// var propertyData = "House ER New 2025";
// var locationData = true;
// var priceData = 87600;

// DOM Elements
var form = document.getElementsByTagName( "form" )[ 0 ];
var formInputs = form.getElementsByTagName( "input" );
var inputId        = formInputs[ 0 ];
var inputAvailable = formInputs[ 1 ];
var inputProperty  = formInputs[ 2 ];
var inputLocation  = formInputs[ 3 ];
var inputPrice     = formInputs[ 4 ];
var findRecord   = document.getElementById( "findRecord" );

// EventListeners
findRecord.addEventListener( "click", sendSelectOneData );

// Event Handlers
function sendSelectOneData( e ) {
	e.preventDefault();
	console.log( inputProperty.value, inputLocation.value, inputPrice.value );

	var xhr = new XMLHttpRequest();
	xhr.open( "POST", endpoint, true );
	xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded; charset=UTF-8" );
	xhr.send( "id=" + inputId.value );

	xhr.addEventListener( "load", loadSelectedOneData  );
}

function loadSelectedOneData( e ) {
	var jsonData = JSON.parse( e.target.responseText );

	console.log( jsonData.data );
	inputAvailable.value = Boolean( Number( jsonData.data.record.available ) );
	inputProperty.value = jsonData.data.record.property;
	inputLocation.value = Boolean( Number( jsonData.data.record.location ) );
	inputPrice.value = jsonData.data.record.price;
}
