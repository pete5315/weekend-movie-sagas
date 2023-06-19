const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  const query = `SELECT genres.name
  FROM genres
  JOIN movies_genres ON genres.id = movies_genres.genre_id
  WHERE movies_genres.movie_id = $1;
  `;
  pool
    .query(query, [req.params.id])
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get genre movies", err);
      res.sendStatus(500);
    });
});

router.get("/", (req, res) => {
  console.log("all genres");
  const query = `SELECT * FROM genres`;
  pool
    .query(query)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get genre movies", err);
      res.sendStatus(500);
    });
});

module.exports = router;
