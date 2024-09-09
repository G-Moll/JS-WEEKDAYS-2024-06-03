USE rev2;

INSERT INTO Roles VALUES
	( NULL, "sysadmin" ),
	( NULL, "admin" ),
	( NULL, "standard" )
;

INSERT INTO PropertyTypes VALUES
	( NULL, "Building" ),
	( NULL, "House" ),
	( NULL, "Aparment" ),
	( NULL, "Room" ),
	( NULL, "Parkink lot" ),
	( NULL, "Parkink drawer" ),
	( NULL, "Other" )
;

INSERT INTO Properties VALUES
	( NULL, DEFAULT, "EAR Aparment", 2,
		'{ "latitude": "19.431328287119673", "longitude": "-99.17199310323767" }',
		"Calle Río Tiber", "SN", "Cuauhtémoc", "Cuauhtémoc",
		"06500", "CDMX", "CDMX", 10000, 3
	),
	( NULL, DEFAULT, "EAR House", 2,
		'{ "latitude": "19.431328287119011", "longitude": "-99.17199310323711" }',
		"Calle Río Tiber", "SN", "Cuauhtémoc", "Cuauhtémoc",
		"06500", "CDMX", "CDMX", 10000, 2
	)
;

INSERT INTO Users VALUES
	( NULL, "Joshua",
		"sysadmin",
		"55", "1133 7773", "jhs@gmail.com", 1 ),
	( NULL, "Peter",
		"admin",
		"55", "1211 5555", "peter@yahoo.com", 2 ),
	( NULL, "Paul",
		"123",
		"55", "1550 2040", "paul@live.com", 3 ),
	( NULL, "Adrian",
		"abc",
		"55", "8090 4455", "jhs@outlook.com", 3 )
;


INSERT INTO Pictures VALUES
	( NULL, "front.jpg", "Lorem ipsum", 1 ),
	( NULL, "frontyard.jpg", "", 2 ),
	( NULL, "backyard.jpg", "Lorem", 2 ),
	( NULL, "new.jpg", "", 1 ),
	( NULL, "old.jpg", "", 1 )
;

INSERT INTO Favorites VALUES
	( NULL, 1, 1 ),
	( NULL, 4, 1 ),
	( NULL, 3, 2 ),
	( NULL, 1, 2 ),
	( NULL, 4, 2 )
;
