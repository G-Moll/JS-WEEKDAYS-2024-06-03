<?php
include_once( "../config/headers.php" );
// include_once( "../config/db-setup.php" );

session_start();

echo json_encode([
	"user_id" => $_SESSION[ "user_id" ],
	"is_authenticated" => $_SESSION[ "is_authenticated" ],
	"auth_token" => $_SESSION[ "auth_token" ]
]);



?>
