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
	( NULL, DEFAULT, "EAR Apartment 2024", 2,
		'{ "latitude": 19.403031023667694, "longitude": -99.18036167959114 }',
		"Avenida", "José Martí", "119",
		"Escandón I Secc", "Miguel Hidalgo", "11800",
		"Ciudad de México", "CDMX",
		30000, 3 ),
	( NULL, DEFAULT, "Mini House EAR 2025", 2,
		'{ "latitude": "19.292770207042615", "longitude": "-99.1796557412046" }',
		"Calle", "Zaragoza", "7",
		"Miguel Hidalgo 1ra Secc", "Tlalpan", "14268",
		"Ciudad de México", "CDMX",
		50000, 2 ),
	( NULL, DEFAULT, "EAR House 2025", 5,
		'{ "latitude": "19.2934258857969", "longitude": "-99.18008623575238" }',
		"Calle", "Belisario Domínguez", "64",
		"Miguel Hidalgo 1a. Sección", "Tlalpan", "14268",
		"Ciudad de México", "CDMX",
		80000, 2 ),
	( NULL, DEFAULT, "Parking lot", 0,
		'{ "latitude": "19.417006570808915", "longitude": "-99.16467992521375" }',
		"Avenida", "Insurgentes Sur", "256",
		"Roma Nte.", "Cuauhtémoc", "06700",
		"Ciudad de México", "CDMX",
		35000, 5 ),
	( NULL, DEFAULT, "Apartment", 3,
		'{ "latitude": "19.4058598918291", "longitude": "-99.17755104026838" }',
		"Avenida", "Eje 4 Sur", "125",
		"Hipódromo", "Cuauhtémoc", "06100",
		"Ciudad de México", "CDMX",
		30000, 3 )
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
