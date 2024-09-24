<?php
include_once( "../config/headers.php" );
include_once( "../config/db-setup.php" );

$password = $_POST[ "password" ];
$email    = $_POST[ "email" ];

$query = "SELECT * FROM Users WHERE email='$email'";
$query_result = mysqli_query( $conn, $query );

$message;

if( mysqli_num_rows( $query_result ) >= 0 ){
	$record = mysqli_fetch_assoc( $query_result );
	if( password_verify( $password, $record[ "password" ] ) ) {
		session_start();
		$_SESSION[ "user_id" ] = $record[ "id" ];
		$_SESSION[ "is_authenticated" ] = true;
		$_SESSION[ "auth_token" ] = bin2hex( random_bytes( 32 ) );
		$message = [
			"status" => "ok",
			"user_id" => $_SESSION[ "user_id" ],
			"message" => "Record found",
			"token" => $_SESSION[ "auth_token" ]
		];
	}
	else {
		$message = [ "status" => "Unmatching credentials" ];
	}
}
else {
	$message = [ "status" => "user not found" ];
}

$json_data = [
	"data" => $message 
];

echo json_encode( $json_data );


?>
