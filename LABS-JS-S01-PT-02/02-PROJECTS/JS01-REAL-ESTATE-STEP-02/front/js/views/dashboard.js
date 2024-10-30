import { AJAXRequest } from "../models/client/AJAXRequest.js";
import { endpointsList } from "../config/endpointsList.js";
import { AuthChecker } from "../models/auth/AuthChecker.js";
// import { loginPassword, loginEmail, loginButton } from "../config/domElements.js";

document.addEventListener( "DOMContentLoaded", function( e ) {
	AuthChecker.check( authCheckerResponse );
});

function authCheckerResponse( e ) {
	console.log( e.target.responseText );
	// var jsonData = JSON.parse( e.target.responseText ).data;
    // console.log( jsonData );
    // return jsonData;
}

var authDashboardModule = {
	name: "Dashboard Module"
}

export {
	authDashboardModule
}


