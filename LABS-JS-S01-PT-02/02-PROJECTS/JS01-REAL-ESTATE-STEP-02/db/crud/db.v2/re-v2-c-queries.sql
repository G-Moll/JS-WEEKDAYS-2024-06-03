USE rev2;


SELECT * FROM Roles;
SELECT * FROM PropertyTypes;
SELECT * FROM Properties;
SELECT * FROM Users;
SELECT * FROM Pictures;
SELECT * FROM Favorites;


SELECT
		*
	FROM
		Properties
	WHERE
		available = TRUE
;


SELECT
		p.id, p.property,
		pt.property_type
	FROM
		Properties AS p
	JOIN PropertyTypes AS pt
		ON p.id = pt.id
;

SELECT
		p.id AS "PROP ID", p.property, p.alcaldy,
		f.id AS "FAV ID",
		u.name
	FROM
		Properties AS p
	JOIN Favorites AS f
		ON f.property_id = p.id
	JOIN Users AS u
		ON f.user_id = u.id
	ORDER BY u.name
;


SELECT
		p.property, p.location
	FROM
		Properties AS p
	WHERE
		JSON_EXTRACT( p.location, '$.latitude' ) LIKE "%19.29%" -- >= 19.29
		AND
		JSON_EXTRACT( p.location, '$.longitude' ) LIKE "%-99.17%" -- >= -99.17
;



