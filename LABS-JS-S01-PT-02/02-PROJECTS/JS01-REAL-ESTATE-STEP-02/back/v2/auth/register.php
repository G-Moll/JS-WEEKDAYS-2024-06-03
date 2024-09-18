<?php
include_once( "../config/headers.php" );
include_once( "../config/db-setup.php" );


$name 	  = $_POST[ 'name' ];
$password = $_POST[ 'password' ];
$lada     = $_POST[ 'lada' ];
$phone    = $_POST[ 'phone' ];
$email    = $_POST[ 'email' ];
$role_id  = $_POST[ 'role_id' ];

if( ! $conn ) { die( "DB connection failed.."  ); }

$password = password_hash( $password, PASSWORD_BCRYPT );
$query = "INSERT INTO Users VALUES( NULL, '$name', '$password', '$lada', '$phone', '$email', $role_id );";

$message;
$json_data = [];

try {
    $query_result = mysqli_query( $conn, $query );
    $message = $query_result ? [ "message" => "User registered"  ] : [ "message" => "User registered" ];
    $json_data[ "status" ] = $message;
    $json_data[ "user" ] = [
        "name" => $name,
        "lada" => $lada,
        "phone" => $phone,
        "email" => $email,
        "role_id" => $role_id
    ];
}
catch( Exception $e ) {
    $json_data[ "error" ] = $e -> getMessage();
}
finally{
    echo json_encode( $json_data );
}

?>
