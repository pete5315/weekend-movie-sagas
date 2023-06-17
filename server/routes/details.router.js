const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  const query = `SELECT *
  FROM movies
  WHERE movies.id = $1;
  `;
  console.log(query);
  pool.query(query, [req.params.id])
    .then( result => {
      console.log(result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

module.exports = router;