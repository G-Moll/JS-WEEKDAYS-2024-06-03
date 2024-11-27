var buttonLocation = document.getElementById( "buttonLocation" );
var infoLocation = document.getElementById( "infoLocation" );

buttonLocation.addEventListener( "click" , getLocationInfo  );


function getLocationInfo( e ) {

	if( ! navigator.geolocation ) {
		infoLocation.innerText = "Geolocation API not found";
		return;
	}

	navigator.geolocation.getCurrentPosition(
		function( position ) {
			console.log( position );
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;
			infoLocation.innerHTML = "Your location is" + "<br>" +
				"Latitude: " + lat + "<br>" +
				"Longitude: " + lng + "<br>" +
				"<a href=https://www.google.com/maps?q=" + lat + "," + lng + " target=_blank>Go to map<a/>";
		},
		function( error ) {
			console.log( error );
		});
	
}
