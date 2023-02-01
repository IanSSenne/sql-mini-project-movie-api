USE movie_db;

INSERT INTO movies (id,movie_name)
VALUES (1,'The Matrix'),
       (2,'The Matrix Reloaded'),
       (3,'The Matrix Revolutions'),
       (4,'The Matrix 4');

INSERT INTO reviews (id,movie_id,review)
VALUES (1,1,"The Absolute Best Movie Ever No Arguments."),
			 (2,1,"Would not watch again, shocker!"),
			 (3,2,"The best movie ever!"),
			 (4,2,"I would watch again, but I don't want to spoil the ending."),
			 (5,3,"One of the movies of all time!"),
			 (6,3,"I would watch again, but I don't want to spoil the ending."),
			 (7,4,"1 Star, not worth $123,456,789.99 to see on the big screen. I feel like im funding the entire movie.");
