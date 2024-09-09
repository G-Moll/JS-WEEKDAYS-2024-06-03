SHOW DATABASES;
CREATE DATABASE rev2;
USE rev2;

-- Strong Entities
CREATE TABLE Roles(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	-- name ENUM( "sysadmin", "admin", "standard" ) NOT NULL DEFAULT "standard",
	name VARCHAR( 25 ) NOT NULL DEFAULT "standard",

	UNIQUE( name )
);

CREATE TABLE PropertyTypes(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	-- property_type ENUM( "building", "house", "aparment", "room", "parking lot", "parking drawer", "other" ),
	property_type VARCHAR( 255 ) NOT NULL,
	UNIQUE( property_type )
);

CREATE TABLE Properties(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	available BOOLEAN NOT NULL DEFAULT TRUE,
	property VARCHAR( 255 ) NOT NULL,
	rooms INT( 11 ) UNSIGNED,
	location JSON NOT NULL,
	street VARCHAR( 255 ) NOT NULL,
	street_number VARCHAR( 28 ) NOT NULL,
	colony VARCHAR( 255 ) NOT NULL,
	alcaldy VARCHAR( 255 ) NOT NULL,
	postal_code VARCHAR( 5 ) NOT NULL,
	city VARCHAR( 255 ) NOT NULL,
	state VARCHAR( 255 ) NOT NULL,
	price INT( 11 ) NOT NULL,

	property_type_id INT( 11 ) UNSIGNED NOT NULL,
	FOREIGN KEY( property_type_id ) REFERENCES PropertyTypes( id )
);

-- Weak Entities
CREATE TABLE Users(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR( 255 ) NOT NULL,
	password VARCHAR( 255 ) NOT NULL,
	lada VARCHAR( 5 ) NOT NULL,
	phone VARCHAR( 25 ) NOT NULL,
	email VARCHAR( 255 ) NOT NULL,
	
	UNIQUE( email ),
	role_id INT( 11 ) UNSIGNED NOT NULL,
	FOREIGN KEY( role_id ) REFERENCES Roles( id )
);

CREATE TABLE Pictures(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	picture VARCHAR( 50 ) NOT NULL,
	description VARCHAR( 255 ),

	property_id INT( 11 ) UNSIGNED NOT NULL,
	FOREIGN KEY( property_id ) REFERENCES Properties( id ) 
);

CREATE TABLE Favorites(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,

	user_id INT( 11 ) UNSIGNED NOT NULL,
	property_id INT( 11 ) UNSIGNED NOT NULL,
	FOREIGN KEY( user_id ) REFERENCES Users( id ), 
	FOREIGN KEY( property_id ) REFERENCES Properties( id ) 
);
