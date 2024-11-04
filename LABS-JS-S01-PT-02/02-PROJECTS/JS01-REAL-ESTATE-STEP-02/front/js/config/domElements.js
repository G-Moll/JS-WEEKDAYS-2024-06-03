import { DOMFinder } from "../models/ui/DOMFinder.js";
var domFinder = new DOMFinder();

var holderProperties = domFinder.getUI( "#holder-properties" )
var form = domFinder.getUI( "form" )[ 0 ];
var formInputs = domFinder.getUI( "input", form );
var inputId        = formInputs[ 0 ];
var inputAvailable = formInputs[ 1 ];
var inputProperty  = formInputs[ 2 ];
var inputLocation  = formInputs[ 3 ];
var inputPrice     = formInputs[ 4 ];
var insertRecord   = domFinder.getUI( "#insertRecord" );
var updateRecord   = domFinder.getUI( "#updateRecord" );
var deleteRecord   = domFinder.getUI( "#deleteRecord" );
var findRecord     = domFinder.getUI( "#findRecord" );

// Login Form
var loginPassword  = domFinder.getUI( "#loginPassword" );
var loginEmail     = domFinder.getUI( "#loginEmail" );
var loginButton    = domFinder.getUI( "#loginButton" );
var loginCheckButton = domFinder.getUI( "#loginCheckButton" );
var logoutButton    = domFinder.getUI( "#logoutButton" );


export {
	holderProperties,

	form,
	formInputs,
	inputId,
	inputAvailable,
	inputProperty,
	inputLocation,
	inputPrice,

	insertRecord,
	updateRecord,
	deleteRecord,
	findRecord,

	loginPassword,
	loginEmail,
	loginButton,
	loginCheckButton,
	logoutButton
};

var obj = { name: "Joshua" }
