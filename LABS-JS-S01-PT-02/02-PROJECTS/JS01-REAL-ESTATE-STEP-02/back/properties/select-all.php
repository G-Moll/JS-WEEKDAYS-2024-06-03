<?php
include_once( "../config/headers.php" );
include_once( "../config/db-setup.php" );

if( ! $conn ) { die( "DB connection failed.."  ); }

$query = "SELECT * FROM Properties";
$query_result = mysqli_query( $conn, $query );
$all_records = [];

while( $record = mysqli_fetch_assoc( $query_result ) ) {
    array_push( $all_records, $record );
}

$json_data = [
    "data" => $all_records
];
echo json_encode( $json_data );

?>
