CREATE DATABASE rdk_js_weekdays;
USE rdk_js_weekdays;

create table draftproperties(
	id INT( 11 ) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	property VARCHAR( 255 ) NOT NULL,
	location BOOLEAN NOT NULL,
	price INT( 11 ) NOT NULL
);

INSERT INTO draftproperties VALUES( NULL, "house", true, 30000 );
INSERT INTO draftproperties VALUES( NULL, "apartment", true, 30000 );
INSERT INTO draftproperties VALUES( NULL, "house", false, 50000 );
INSERT INTO draftproperties VALUES( NULL, "parking lot", true ,80000 );
INSERT INTO draftproperties VALUES( NULL, "apartment", false, 35000 );


-- { "property": "house", "location": true, "price": 30000 },
-- { "property": "apartment", "location": true, "price": 40000 },
-- { "property": "house", "location": false, "price": 50000 }

SELECT * FROM draftproperties;


SHOW DATABASES;
SHOW TABLES;
-- DESCRIBE draftproperties;
-- DROP TABLE draftproperties;
-- DROP TABLE draftproperties;
