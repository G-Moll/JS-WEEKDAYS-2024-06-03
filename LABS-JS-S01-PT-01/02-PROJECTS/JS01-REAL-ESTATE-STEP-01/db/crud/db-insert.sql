SHOW DATABASES;
USE rdk_js_weekdays;

SHOW tables;
DESCRIBE draftproperties;

INSERT INTO draftproperties VALUES( "building", true, 500000 );

SELECT * FROM draftproperties;
SELECT * FROM draftproperties where property = "house";
SELECT * FROM draftproperties order by property desc limit 5;
