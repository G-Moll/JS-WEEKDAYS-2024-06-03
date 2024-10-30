<?php
header( "Access-Control-Allow-Origin: http://localhost:3000" );
header( "Access-Control-Allow-Credentials: true" );
header( "Content-Type: application/json; charset=UTF-8" );
header( "Access-Control-Allow-Methods: GET, POST, DELETE, UPDATE, OPTIONS" );
header( "Access-Control-Allow-Headers: Content-Type, Authorization" );

if( $_SERVER[ "REQUEST_METHOD" ] == "OPTIONS" ) {
	http_response_code( 200 );
	exit;
}

?>
