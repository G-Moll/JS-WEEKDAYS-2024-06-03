import { AJAXRequest } from "../models/client/AJAXRequest.js";
import { endpointsList } from "../config/endpointsList.js";
import { loginPassword, loginEmail, loginButton } from "../config/domElements.js";


loginButton.addEventListener( "click", loginButtonClick );

function loginButtonClick( e ) {
	e.preventDefault();

	var requestLogin = new AJAXRequest(
		"POST",
		endpointsList.endpointBuild( "auth", "login" ),
		responseLogin
	);
	requestLogin.withCredentials();
	requestLogin.setHeader( "encodeURL" );
	requestLogin.send(
		"password=" + loginPassword.value +
		"&email=" + loginEmail.value
	);
}

function responseLogin ( e ) {
	var jsonData = JSON.parse( e.target.responseText ).data;
	if( jsonData.status === "ok" ) {
		sessionStorage.setItem( "auth_token", jsonData.token );
		window.location = "http://localhost:3000/views/dashboard.html";
	}
	else {
		alert( jsonData.status );
		console.log( jsonData );
	}
}

var authLogInModule = {
	name: "Login Module"
}

export {
	authLogInModule
}
