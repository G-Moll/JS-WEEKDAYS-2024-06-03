<?php
include_once( "../config/headers.php" );
include_once( "../config/db-setup.php" );

$property = $_POST[ 'property' ];
$location = $_POST[ 'location' ];
$price    = $_POST[ 'price' ];

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
