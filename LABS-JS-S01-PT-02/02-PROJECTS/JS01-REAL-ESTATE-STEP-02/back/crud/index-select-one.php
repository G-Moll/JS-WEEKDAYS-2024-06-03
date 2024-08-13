<?php
header( "Access-Control-Allow-Origin: *" );

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "rdk_js_weekdays";

$id        = $_POST[ 'id' ];
$property  = $_POST[ 'property' ];
$available = $_POST[ 'available' ];
$location  = $_POST[ 'location' ];
$price     = $_POST[ 'price' ];

$conn = mysqli_connect( $db_host, $db_user, $db_pass, $db_name );
if( ! $conn ) { die( "DB connection failed.."  ); }

$query = "SELECT * FROM draftproperties WHERE id=$id";
$query_result = mysqli_query( $conn, $query );

$message = mysqli_num_rows( $query_result ) > 0 ?
    [ "message" => "OK", "record" => mysqli_fetch_assoc( $query_result ) ] :
    [ "message" => "NO, record not found" ];

$json_data = [
    "data" => $message
];
echo json_encode( $json_data );

?>
