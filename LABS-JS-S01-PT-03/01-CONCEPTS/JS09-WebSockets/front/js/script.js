let messages = document.getElementById( "messages" );
let messageInput = document.getElementById( "messageInput" );
let sendButton = document.getElementById( "sendButton" );
let clientSocket = new WebSocket( "ws://localhost:8282" );

messageInput.addEventListener( "keydown", messageSendHandler );
sendButton.addEventListener("click", messageSendHandler);
clientSocket.addEventListener( "open", socketClientOpenHandler );
clientSocket.addEventListener( "message", socketClientMessageHandler );
clientSocket.addEventListener( "close", socketClientCloseHandler );
clientSocket.addEventListener( "error", socketClientErrorHandler );

function messageSendHandler( e ) {
	if(
		( e.keyCode === 13 || e.type === "click" )
		&& messageInput.value.trim()
	) {
		clientSocket.send( messageInput.value );
		console.log( messageInput.value );
	}
}

function socketClientOpenHandler( e ) {
	e.target.send( "New Client Connected.." );
	console.log( "New Client Connected.." );
}
function socketClientMessageHandler( e ) {
	messages.value += e.data + "\n";
	console.log( e.data );
}
function socketClientCloseHandler( e ) {
	console.log( "Disconnected from server", e );
}
function socketClientErrorHandler( e ) {
	console.log( "WebSocket Error...", e );
}
