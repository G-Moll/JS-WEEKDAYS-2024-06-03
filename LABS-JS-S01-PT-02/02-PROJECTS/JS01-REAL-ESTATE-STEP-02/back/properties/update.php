<?php
include_once( "../config/headers.php" );
include_once( "../config/db-setup.php" );

$id        = $_POST[ 'id' ];
$property  = $_POST[ 'property' ];
$available = $_POST[ 'available' ];
$location  = $_POST[ 'location' ];
$price     = $_POST[ 'price' ];

if( ! $conn ) { die( "DB connection failed.."  ); }

$query = "UPDATE draftproperties SET available=$available, property='$property', location=$location, price=$price WHERE id=$id";
$query_result = mysqli_query( $conn, $query );
$message = $query_result ? [ "message" => "OK, updated record" ] : [ "message" => "NO, record could not be updated" ];

$json_data = [
    "data" => $message
];
echo json_encode( $json_data );

?>
