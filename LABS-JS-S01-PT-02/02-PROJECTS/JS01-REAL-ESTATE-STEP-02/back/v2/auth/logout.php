<?php
include_once( "../config/headers.php" );

session_start();
session_destroy();

echo json_encode([
	"success" => true,
	"message" => "Session destroyed"
]);

?>
