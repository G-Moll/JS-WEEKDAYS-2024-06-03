var propertyData = "House ER New 2025";
var locationData = true;
var priceData = 87600;

var endpoint = "http://localhost:8080/crud/index-insert.php";
var xhr = new XMLHttpRequest();
xhr.open( "POST", endpoint, true );
xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded; charset=UTF-8" );
xhr.send( "property=" + propertyData + "&location=" + locationData + "&price=" + priceData );

xhr.addEventListener( "load", dataLoaded  );

function dataLoaded( e ) {
	var jsonData = JSON.parse( e.target.responseText );
	console.log( jsonData );
}
