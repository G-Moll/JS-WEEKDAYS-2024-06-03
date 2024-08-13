<?php
header( "Access-Control-Allow-Origin: *" );

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "rdk_js_weekdays";

$id = $_POST[ 'id' ];

$conn = mysqli_connect( $db_host, $db_user, $db_pass, $db_name );
if( ! $conn ) { die( "DB connection failed.."  ); }

$query = "UPDATE draftproperties SET available=FALSE WHERE id=$id";
// $query = "DELETE FROM draftproperties WHERE id=$id";

$query_result = mysqli_query( $conn, $query );
$message = $query_result ? [ "message" => "OK, deleted record" ] : [ "message" => "NO, record could not be deleted" ];

$json_data = [
    "data" => $message
];
echo json_encode( $json_data );

?>
