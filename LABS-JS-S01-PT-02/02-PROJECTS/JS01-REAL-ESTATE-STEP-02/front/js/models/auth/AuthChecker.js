import { AJAXRequest } from "../client/AJAXRequest.js";
import { endpointsList } from "../../config/endpointsList.js";

function AuthChecker() {}

AuthChecker.check = function check( reponseAuthCheck ) {
	var requestAuthCheck = new AJAXRequest(
		"POST",
		endpointsList.endpointBuild( "auth", "auth-check" ),
		reponseAuthCheck
	);
	requestAuthCheck.setHeader( "encodeAUTH", sessionStorage.getItem( "auth_token" ) );
	requestAuthCheck.send();
};

export {
	AuthChecker
};
