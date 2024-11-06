import { AJAXRequest } from "../models/client/AJAXRequest.js";
import { endpointsList } from  "../config/endpointsList.js";
import { fileFolder, fileInput, fileUpload } from  "../config/domElements.js";

fileUpload.addEventListener( "click", function( e ) {
	e.preventDefault();
	console.log( e.type, "Image form" );
});


var imageUploadModule = {
	name: "Image Upload Module" 
};

export {
	imageUploadModule
};
