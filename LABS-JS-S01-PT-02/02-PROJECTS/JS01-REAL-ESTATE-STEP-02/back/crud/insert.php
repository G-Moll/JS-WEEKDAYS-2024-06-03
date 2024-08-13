<?php
header( "Access-Control-Allow-Origin: *" );

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "rdk_js_weekdays";

$property = $_POST[ 'property' ];
$location = $_POST[ 'location' ];
$price    = $_POST[ 'price' ];

$conn = mysqli_connect( $db_host, $db_user, $db_pass, $db_name );
if( ! $conn ) { die( "DB connection failed.."  ); }



$query = "INSERT INTO draftproperties(id, available, property, location, price) VALUES( NULL, DEFAULT, '$property', $location, $price )";
// echo $query;

$query_result = mysqli_query( $conn, $query );
$message = $query_result ? [ "message" => "OK" ] : [ "message" => "NO" ];

$json_data = [
    "data" => $message
];
echo json_encode( $json_data );

?>
