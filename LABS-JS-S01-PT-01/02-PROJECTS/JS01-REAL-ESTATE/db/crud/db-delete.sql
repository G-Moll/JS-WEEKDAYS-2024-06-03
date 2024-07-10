CREATE DATABASE rdk_js_weekdays;
USE rdk_js_weekdays;

create table draftproperties(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	available BOOLEAN NOT NULL DEFAULT TRUE,
	property VARCHAR( 255 ) NOT NULL,
	location BOOLEAN NOT NULL,
	price INT( 11 ) NOT NULL
);

INSERT INTO draftproperties VALUES( NULL, DEFAULT, "EAR House 2025", true, 30000 );
INSERT INTO draftproperties VALUES( NULL, DEFAULT, "EAR Apartment 2024", true, 30000 );
INSERT INTO draftproperties VALUES( NULL, DEFAULT, "house", false, 50000 );
INSERT INTO draftproperties VALUES( NULL, DEFAULT, "parking lot", true ,80000 );
INSERT INTO draftproperties VALUES( NULL, DEFAULT, "apartment", false, 35000 );


SELECT * FROM draftproperties;
-- DELETE FROM draftproperties WHERE id = 22; HARD DELETE
-- UPDATE draftproperties SET available=FALSE WHERE id=21; SOFT DELETE
SELECT * FROM draftproperties WHERE available = TRUE;
, 

SHOW DATABASES;
SHOW TABLES;
-- DESCRIBE draftproperties;
-- DROP TABLE draftproperties;
-- TRUNCATE TABLE draftproperties;
