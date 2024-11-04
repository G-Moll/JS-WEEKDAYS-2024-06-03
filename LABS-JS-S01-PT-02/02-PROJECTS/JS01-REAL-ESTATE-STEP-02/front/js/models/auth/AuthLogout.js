import { AJAXRequest } from "../client/AJAXRequest.js";
import { endpointsList } from "../../config/endpointsList.js";

function AuthLogout() {}

AuthLogout.logout = function logout( responseAuthLogout ) {
	var requestAuthLogout = new AJAXRequest(
		"POST",
		endpointsList.endpointBuild( "auth", "logout" ),
		responseAuthLogout
	);
	requestAuthLogout.withCredentials();
	requestAuthLogout.setHeader( "encodeURL" );
	requestAuthLogout.send();
}

export { AuthLogout };
