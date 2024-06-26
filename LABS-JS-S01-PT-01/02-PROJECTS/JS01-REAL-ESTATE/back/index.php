<?php
header( "Access-Control-Allow-Origin: *" );

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "rdk_js_weekdays";

$conn = mysqli_connect( $db_host, $db_user, $db_pass, $db_name );
if( ! $conn ) {
	die( "DB connection failed.."  );
}

$query = "SELECT * FROM draftproperties";
$query_result = mysqli_query( $conn, $query );

$json_data = [
	"data" => mysqli_fetch_assoc( $query_result )
];

echo json_encode( $json_data );


// while( $record = ) ) {
// 	echo "property" . $record[ "property" ];
// }

// $json_data = [
// 	"data" => [
// 		[ "property" => "house", "location" => true, "price" => 30000 ],
// 		[ "property" => "apartment", "location" => true, "price" => 40000 ],
// 		[ "property" => "house", "location" => false, "price" => 50000 ]
// 	]
// ];

// echo json_encode( $json_data );

?>
