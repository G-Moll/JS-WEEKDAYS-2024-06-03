CREATE DATABASE rdk_js_weekdays;
USE rdk_js_weekdays;

create table draftproperties(
	property VARCHAR( 255 ) NOT NULL,
	location BOOLEAN NOT NULL,
	price INT( 11 ) NOT NULL
);

INSERT INTO draftproperties VALUES( "house", true, 30000 );
INSERT INTO draftproperties VALUES( "apartment", true, 30000 );
INSERT INTO draftproperties VALUES( "house", false, 50000 );
INSERT INTO draftproperties VALUES( "parking lot", true ,80000 );
INSERT INTO draftproperties VALUES( "apartment", false, 35000 );

SELECT * FROM draftproperties;


SHOW DATABASES;
SHOW TABLES;
-- DESCRIBE draftproperties;
-- DROP TABLE draftproperties;
-- DROP TABLE draftproperties;
