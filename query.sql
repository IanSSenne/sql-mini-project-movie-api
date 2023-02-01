SELECT reviews.id, review, movie_name
FROM reviews
JOIN movies ON reviews.movie_id = movies.id;

