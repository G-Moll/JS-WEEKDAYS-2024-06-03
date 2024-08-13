<?php
header( "Access-Control-Allow-Origin: *" );

$data = [
	"data" => [
		[ "property" => "house", "location" => true, "price" => 30000 ],
		[ "property" => "apartment", "location" => true, "price" => 40000 ],
		[ "property" => "house", "location" => false, "price" => 50000 ]
	]
];

echo json_encode( $data );

?>
