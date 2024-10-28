import { AJAXRequest } from "../models/client/AJAXRequest.js";
import { endpointsList } from "../config/endpointsList.js";
import { AuthChecker } from "../models/auth/AuthChecker.js";
// import { loginPassword, loginEmail, loginButton } from "../config/domElements.js";

document.addEventListener( "DOMContentLoaded", function( e ) {
	AuthChecker.check( function() {
		console.log( "Testing something..." );
	});
});

var authDashboardModule = {
	name: "Dashboard Module"
}

export {
	authDashboardModule
}


