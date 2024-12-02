var uiVideo 	    = document.getElementById( "uiVideo" );
var uiVideoStart    = document.getElementById( "uiVideoStart" );
var uiVideoStop     = document.getElementById( "uiVideoStop" );
var uiError 	    = document.getElementById( "uiError" );
var mediaOptions    = null;
var mediaStreamData = null;

uiVideoStart.addEventListener( "click", videoStartHandler );
uiVideoStop.addEventListener( "click", videoStopHandler );



function videoStartHandler( e ) {
	e.preventDefault();

	uiError.innerHTML = "";
	
	if( ! navigator.mediaDevices || ! navigator.mediaDevices.getUserMedia ) {
		uiError.innerHTML = "Camera API not supported...";
		return;
	}

	navigator.mediaDevices.getUserMedia( { video: true, audio: true } )
		.then( function( streamCamData ) {
			mediaStreamData = streamCamData;
			uiVideo.srcObject = streamCamData;
		})
		.catch( function( error ) {
		});

	// console.log( e.type );
}

function videoStopHandler( e ) {
	e.preventDefault();
	if( mediaStreamData ) {
		mediaStreamData.getTracks().forEach( function( track ) {
			track.stop();
		});
	}

	console.log( e.type );
}
