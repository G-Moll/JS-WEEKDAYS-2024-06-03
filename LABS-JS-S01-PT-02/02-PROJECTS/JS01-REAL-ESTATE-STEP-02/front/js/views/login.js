import { AJAXRequest } from "../models/client/AJAXRequest.js";
import { endpointsList } from "../config/endpointsList.js";
import { loginPassword, loginEmail, loginButton } from "../config/domElements.js";


loginButton.addEventListener( "click", loginButtonClick );

function loginButtonClick( e ) {
	e.preventDefault();

	// console.log( loginPassword.value, loginEmail.value );

	var requestLogin = new AJAXRequest(
		"POST",
		endpointsList.endpointBuild( "auth", "login" ),
		responseLogin
	);
	requestLogin.setHeader();
	requestLogin.send(
		"password=" + loginPassword.value +
		"&email=" + loginEmail.value
	);
}

function responseLogin ( e ) {
	var jsonData = JSON.parse( e.target.responseText ).data;
	if( jsonData.status === "ok" ) {
		window.location = "http://localhost:3000/views/dashboard.html";
	}
}

var authLogInModule = {
	name: "Login Module"
}

export {
	authLogInModule
}
