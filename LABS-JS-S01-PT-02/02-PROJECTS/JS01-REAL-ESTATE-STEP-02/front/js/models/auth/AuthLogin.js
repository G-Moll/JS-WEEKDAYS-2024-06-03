import { AJAXRequest } from "../client/AJAXRequest.js";
import { endpointsList } from "../../config/endpointsList.js";

function AuthLogin() {}

AuthLogin.login = function login( loginData, reponseAuthLogin ) {
	var requestAuthLogin = new AJAXRequest(
		"POST",
		endpointsList.endpointBuild( "auth", "login" ),
		reponseAuthLogin
	);
	requestAuthLogin.withCredentials();
	requestAuthLogin.setHeader( "encodeURL" );
	requestAuthLogin.send(
		"password=" + loginData.password +
		"&email=" + loginData.email
	);
};

export { AuthLogin };
