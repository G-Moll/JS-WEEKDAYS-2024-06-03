// Global variables
var endpoint = "http://localhost:8080/crud/index-insert.php";
// var propertyData = "House ER New 2025";
// var locationData = true;
// var priceData = 87600;

// DOM objects
var form = document.getElementsByTagName( "form" )[ 0 ];
var formInputs = form.getElementsByTagName( "input" );
var inputId        = formInputs[ 0 ];
var inputAvailable = formInputs[ 1 ];
var inputProperty  = formInputs[ 2 ];
var inputLocation  = formInputs[ 3 ];
var inputPrice     = formInputs[ 4 ];
var insertRecord   = document.getElementById( "insertRecord" );


// EventListeners
insertRecord.addEventListener( "click", sendInsertData );

// Event Handlers
function sendInsertData( e ) {
    e.preventDefault();
    console.log( inputProperty.value, inputLocation.value, inputPrice.value );

    var xhr = new XMLHttpRequest();
    xhr.open( "POST", endpoint, true );
    xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded; charset=UTF-8" );
    xhr.send( "property=" + inputProperty.value + "&location=" + inputLocation.value + "&price=" + inputPrice.value );
    xhr.addEventListener( "load", loadInsertedData  );
}

function loadInsertedData( e ) {
    // var jsonData = JSON.parse( e.target.responseText );
    var jsonData = ( e.target.responseText );
    console.log( jsonData );
    form.reset();
}
