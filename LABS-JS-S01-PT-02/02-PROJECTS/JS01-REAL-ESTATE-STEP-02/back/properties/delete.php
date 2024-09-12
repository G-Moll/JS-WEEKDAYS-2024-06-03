<?php
include_once( "../config/headers.php" );
include_once( "../config/db-setup.php" );

$id = $_POST[ 'id' ];

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
