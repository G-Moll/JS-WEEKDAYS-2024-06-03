<?php
include_once( "../config/headers.php" );
include_once( "../config/db-setup.php" );

$fileFolder = $_POST[ "fileFolder" ];
$allowedTypes = [ "image/png", "image/jpg", "image/jpeg" ];
$uploadDir = "../public/property-images/" . $fileFolder . "/";

if( ! is_dir( $uploadDir ) ) {
	mkdir( $uploadDir );
}

$responses = [];
foreach( $_FILES[ "files" ][ "tmp_name" ] as $key => $tmpName ) {
	$fileName = basename( $_FILES[ "files" ][ "name" ][ $key ] );
	$fileType = $_FILES[ "files" ][ "file" ][ $key ];
	$uploadFile = $uploadDir . $fileName;

	// if( ! in_array( $fileType , $allowedTypes ) ) {
	// 	$responses[] = "File type not allowed " . $fileName;
	// 	continue;
	// }

	if( move_uploaded_file( $tmpName , $uploadFile) ) {
		$responses[] = "File uploaded successfuly " . $fileName;
	}
	else {
		$responses[] = "Error on  uploading file " . $fileName;
	}
}

echo implode( "\n" , $responses );

?>
