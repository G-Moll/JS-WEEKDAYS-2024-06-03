import { AJAXRequest } from "../models/client/AJAXRequest.js";
import { AuthLogout } from "../models/auth/AuthLogout.js";
// import { AuthLoging } from "../models/auth/AuthLogin.js";
import { AuthChecker } from "../models/auth/AuthChecker.js";

import { endpointsList } from "../config/endpointsList.js";
import { loginPassword, loginEmail, loginButton, loginCheckButton, logoutButton } from "../config/domElements.js";


loginButton.addEventListener( "click", loginButtonClick );
loginCheckButton.addEventListener( "click", loginCheckButtonClick );
logoutButton.addEventListener( "click", logoutButtonClick );

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

function loginCheckButtonClick( e ) {
	e.preventDefault();
	AuthChecker.check( responseLoginCheck );
}

function logoutButtonClick( e ) {
	e.preventDefault();
	AuthLogout.logout( responseLogout );
}


function responseLogin ( e ) {
	var jsonData = JSON.parse( e.target.responseText ).data;
	if( jsonData.status === "ok" ) {
		sessionStorage.setItem( "auth_token", jsonData.token );
		console.log( jsonData );
		// window.location = "http://localhost:3000/views/dashboard.html";
	}
	else {
		alert( jsonData.status );
		console.log( jsonData );
	}
}

function responseLoginCheck( e ) {
	console.log( e.target.responseText );
}

function responseLogout( e ) {
	var jsonData = e.target.responseText;
	console.log( jsonData );
}

var authLogInModule = {
	name: "Login Module"
}

export {
	authLogInModule
}
