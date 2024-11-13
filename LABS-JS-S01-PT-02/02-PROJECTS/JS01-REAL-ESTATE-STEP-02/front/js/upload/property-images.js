import { AJAXRequest } from "../models/client/AJAXRequest.js";
import { endpointsList } from  "../config/endpointsList.js";
import { fileFolder, fileInput, fileUpload } from  "../config/domElements.js";

fileUpload.addEventListener( "click", function( e ) {
	e.preventDefault();

	var formData = new FormData();
	var files = fileInput.files;
	var allowedTypes = [ "image/png", "image/jpg", "image/jpeg" ];

	if( files.length > 0 ) {
		for( var i = 0; i < files.length; i++  ) {
			var file = files[ i ];
			// if( ! allowedTypes.includes( file.type ) ) {
			// 	alert( "File type not allowed" + file.type );
			// 	continue;
			// }
			formData.append( "files[]", file );
		}
		formData.append( "folderName", fileFolder.value  );

		var requestFileUpload = new AJAXRequest(
			"POST",
			endpointsList.endpointBuild( "upload", "property-images" ),
			responseFileUpload
		);
		requestFileUpload.setHeader( "encodeFORM" );
		requestFileUpload.send( formData );
	}
	else {
		console.log( "Choose at leaset one file..." );
	}


	// console.log( files );


	// console.log( e.type, "Image form" );
});


function responseFileUpload( e ) {
	
	// if() {

	// }
	// else {

	// }

	console.log( e.target.responseText );
}

var imageUploadModule = {
	name: "Image Upload Module" 
};

export {
	imageUploadModule
};
