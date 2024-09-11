<?php
header( "Access-Control-Allow-Origin: http://localhost:3000" );

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "rev2";

$name 	  = $_POST[ 'name' ];
$password = $_POST[ 'password' ];
$lada     = $_POST[ 'lada' ];
$phone    = $_POST[ 'phone' ];
$email    = $_POST[ 'email' ];
$role_id  = $_POST[ 'role_id' ];

$conn = mysqli_connect( $db_host, $db_user, $db_pass, $db_name );
if( ! $conn ) { die( "DB connection failed.."  ); }

$password = password_hash( $password , PASSWORD_BCRYPT );
$query = "INSERT INTO Users VALUES( NULL, '$name', '$password', '$lada', '$phone', '$email', $role_id );";

$query_result = mysqli_query( $conn, $query );
$message = $query_result ? [ "message" => "User registered"  ] : [ "message" => "User registered" ];

$json_data = [
    "data" => $message
];
echo json_encode( $json_data );
?>
