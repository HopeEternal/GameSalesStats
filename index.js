const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const {Pool} = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/getMostCommonGenre', (req, res) => {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("not able to get connection " + err);
      res.status(400).send(err);
    }
    var sqlStmt = "SELECT   genre_id " +
                  "FROM     gamesales " +
                  "GROUP BY genre_id " +
                  "ORDER BY COUNT(*) DESC " +
                  "LIMIT    1;";
    client.query(sqlStmt, function(err, result) {
      done();
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      console.log(result.rows);
      res.status(200).send(result.rows);
    });
  });
});

app.get('/api/getGamesTable', (req, res) => {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("not able to get connection " + err);
      res.status(400).send(err);
    }
    var sqlStmt = "SELECT   * " +
                  "FROM     gamesales " +
                  "GROUP BY rank_id " +
                  "ORDER BY COUNT(*) " +
                  "LIMIT    1;";
    client.query(sqlStmt, function(err, result) {
      done();
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      console.log(result.rows);
      res.status(200).send(result.rows);
    });
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening on ${port}`);