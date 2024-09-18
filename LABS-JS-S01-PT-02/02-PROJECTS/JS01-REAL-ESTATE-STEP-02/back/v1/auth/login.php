<?php
include_once( "../config/headers.php" );
include_once( "../config/db-setup.php" );

$password = $_POST[ "password" ];
$email    = $_POST[ "email" ];

$query = "SELECT * FROM Users WHERE email='$email";
$query_result = mysqli_query( $conn, $query );

$message;

if( mysqli_num_rows( $query_result ) >= 0 ){
	$record = mysqli_fetch_assoc( $query_result );
	if( password_verify( $password, $record[ "password" ] ) ) {
		$message = [
			"status" => "ok",
			"message" => "Record found",
			"token" => bin2hex( random_bytes( 32 ) )
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
