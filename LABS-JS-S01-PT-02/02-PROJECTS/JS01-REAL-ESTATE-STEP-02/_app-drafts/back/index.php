<?php
header( "Access-Control-Allow-Origin: http://localhost:3000/*" );

$json_data = [
	"data" => [
		[ 	"id" => 1,
			"property" => "house",
			"location" => [
				"lat" => 19.436810375762757,
				"lng" => -99.15689768353535  ],
			"price" => 30000 ],
		[ 	"id" => 2,
			"property" => "apartment",
			"location" => [
				"lat" => 19.43193905295002,
				"lng" => -99.1703504147699 ],
			"price" => 40000 ],
		[ 	"id" => 3,
			"property" => "house",
			"location" => [
				"lat" => 19.281746973267825,
				"lng" => -99.18666837330032 ],
			"price" => 50000 ]
	]
];

echo json_encode( $json_data );

?>



