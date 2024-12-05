var uiVideo 	    = document.getElementById( "uiVideo" );
var uiVideoStart    = document.getElementById( "uiVideoStart" );
var uiVideoStop     = document.getElementById( "uiVideoStop" );
var uiCaptureImage  = document.getElementById( "uiCaptureImage" );
var uiError 	    = document.getElementById( "uiError" );
var uiCanvas = document.getElementById( "uiCanvas" );
var context;
var uiLink = document.getElementById( "uiLink" );
var uiImg = document.getElementById( "uiImg" );

var mediaOptions    = null;
var mediaStreamData = null;

uiVideoStart.addEventListener( "click", videoStartHandler );
uiVideoStop.addEventListener( "click", videoStopHandler );
uiCaptureImage.addEventListener( "click", imageCaptureHandler );



function videoStartHandler( e ) {
	e.preventDefault();

	uiError.innerHTML = "";
	
	if( ! navigator.mediaDevices || ! navigator.mediaDevices.getUserMedia ) {
		uiError.innerHTML = "Camera API not supported...";
		return;
	}

	navigator.mediaDevices.getUserMedia( { video: true, audio: !true } )
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


function imageCaptureHandler( e ) {
	context = uiCanvas.getContext( "2d" );
	uiCanvas.width = uiVideo.videoWidth;
	uiCanvas.height = uiVideo.videoHeight;

	context.drawImage( uiVideo, 0, 0, uiCanvas.width, uiCanvas.height );

	uiLink.href = uiCanvas.toDataURL( "image/png" );
	uiLink.download = "Picture from Camera";
	uiImg.src = uiCanvas.toDataURL( "image/png" );
	console.log( uiLink );
}
