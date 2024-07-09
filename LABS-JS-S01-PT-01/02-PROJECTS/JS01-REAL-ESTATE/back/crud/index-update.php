<?php
header( "Access-Control-Allow-Origin: *" );

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "rdk_js_weekdays";

$id       = $_POST[ 'id' ];
$property = $_POST[ 'property' ];
$location = $_POST[ 'location' ];
$price    = $_POST[ 'price' ];

$conn = mysqli_connect( $db_host, $db_user, $db_pass, $db_name );
if( ! $conn ) { die( "DB connection failed.."  ); }

$query = "UPDATE draftproperties SET property='$property', location=$location, price=$price WHERE id=$id";
$query_result = mysqli_query( $conn, $query );
$message = $query_result ? [ "message" => "OK, updated record" ] : [ "message" => "NO, record could not be updated" ];

$json_data = [
    "data" => $message
];
echo json_encode( $json_data );

?>
