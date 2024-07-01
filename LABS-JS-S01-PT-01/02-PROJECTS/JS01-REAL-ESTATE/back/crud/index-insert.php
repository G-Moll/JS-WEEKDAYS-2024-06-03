<?php
header( "Access-Control-Allow-Origin: *" );

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "rdk_js_weekdays";

$property = $_POST[ 'property' ];
$location = $_POST[ 'location' ];
$price = $_POST[ 'price' ];

$conn = mysqli_connect( $db_host, $db_user, $db_pass, $db_name );

if( ! $conn ) { die( "DB connection failed.."  ); }

$query = "INSERT INTO draftproperties VALUES( '$property', $location, $price )";
$query_result = mysqli_query( $conn, $query );

if( $query_result ) {
	echo "OK";
}
else {
	echo "NO";
}

// $json_data = [
// 	"data" => $all_records
// ];

// echo json_encode( $json_data );

?>
