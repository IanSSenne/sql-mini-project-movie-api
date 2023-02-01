const express = require("express");
const mysql2 = require("./mysql2.config");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extend: false }));
app.use((req, res, next) => {
	console.log(req.body);
	next();
});
app.use(express.json());

const db = mysql.createConnection(mysql2);

app.post("/api/add-movie", (req, res) => {
	const movieData = req.body;
	if (typeof movieData.name === "string" && movieData.name.length <= 100) {
		db.query(
			"INSERT INTO movies (movie_name) VALUES (?)",
			[movieData.name],
			(err, result) => {
				if (err !== null)
					res.json({
						status: "error",
						message: err.message,
					});
				res.json({
					status: "success",
					result,
				});
			}
		);
	} else {
		res.json({
			status: "error",
			message:
				"expected property name of type string with length no longer than 100.",
		});
	}
});

app.get("/api/movies", (req, res) => {
	db.query("SELECT * FROM movies", (err, result) => {
		if (err) {
			res.send({
				status: "error",
				message: err.message,
			});
		}
		res.send({
			status: "success",
			result,
		});
	});
});

app.delete("/api/movies/:id", (req, res) => {});

app.get("/api/reviews", (req, res) => {});

app.put("/api/reviews/:id", (req, res) => {});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
