import { serve } from "https://deno.land/std@0.186.0/http/server.ts";

let clients = new Set<WebSocket>();

console.log( "WebSocket Server running..." );

serve( ( request ) => {
	if( request.headers.get( "upgrade" ) !== "websocket" ) {
		return new Response( "This is a WebSocket server... ", { status: 400 } );
	}

	const { socket, response } = Deno.upgradeWebSocket( request );
	socket.addEventListener( "open", socketServerOpenHandler );
	socket.addEventListener( "message", socketServerMessageHandler );
	socket.addEventListener( "close", socketServerCloseHandler );
	socket.addEventListener( "error", socketServerErrorHandler );

	return response;
}, { port: 8282 });


function socketServerOpenHandler( e ) {
	clients.add( e.target );
	e.target.send( "Welcome to WebSocket server" );
	console.log("Welcome to WebSocket server" );
}
function socketServerMessageHandler( e ) {
	e.target.send( "Server got a message: " + e.data + " (WebSocket Server)" );
	console.log("Server got a message: " + e.data + " (WebSocket Server)" );

	clients.forEach( ( client ) => {
		if( client !== e.target && client.readyState === WebSocket.OPEN ) {
			client.send( "Broadcasted message: " + e.data );
		}
	});
}
function socketServerCloseHandler( e ) {
	clients.delete( e.target );
	console.log( "Client disconnected..." );
}
function socketServerErrorHandler( e ) {
	console.log( "WebSocket Error..." );
}
