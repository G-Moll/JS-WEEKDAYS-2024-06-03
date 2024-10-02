<?php
include_once( "../config/headers.php" );
// include_once( "../config/db-setup.php" );

session_start();

$message;
$status_code;
$allHeaders = getallheaders();

if(
	isset( $_SESSION[ "is_authenticated" ] ) &&
	$_SESSION[ "is_authenticated" ] &&
	isset( $allHeaders[ "Authorization" ] ) &&
	$allHeaders[ "Authorization" ]
) {
	$received_token = str_replace("Bearer ", "", $allHeaders[ "Authorization" ]) ;
	// "Bearer 5fb66080484ba3ada1d09b6a38fa6fe15578b7de53b561a9b2ac74391509d059"
	if( $received_token === $_SESSION[ "auth_token" ] ) {
		$status_code = 200;
		http_response_code( $status_code );
		$message = [
			"status" => $status_code,
			"message" => "Authorized user"
		];
	}
	else {
		$status_code = 403;
		http_response_code( $status_code );
		$message = [
			"status" => $status_code,
			"message" => "Unauthorized user"
		];
	}
}
else {
	$status_code = 401;
	http_response_code( $status_code );
	$message = [
		"status" => $status_code,
		"message" => "Unauthenticated user"
	];
}


echo json_encode([
	"data" => $message,
	"headers" => $allHeaders,
	"user_id" => $_SESSION[ "user_id" ],
	"is_authenticated" => $_SESSION[ "is_authenticated" ],
	"auth_token" => $_SESSION[ "auth_token" ]
]);



?>
