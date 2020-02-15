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
    var sqlStmt = "SELECT   genre, COUNT(genre) " +
                  "FROM     gamesales " +
                  "LEFT JOIN genres ON gamesales.genre_id=genres.genre_id " +
                  "GROUP BY genre " +
                  "ORDER BY COUNT(*) DESC;";
                  
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

app.get('/api/getRPGPopularity', (req, res) => {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("not able to get connection " + err);
      res.status(400).send(err);
    }
    var sqlStmt = "SELECT   year_released, SUM(sales) " +
                  "FROM     gamesales " +
                  "LEFT JOIN genres ON gamesales.genre_id=genres.genre_id " +
                  "WHERE    genres.genre='Role-Playing' AND gamesales.year_released IS NOT NULL " +
                  "GROUP BY gamesales.year_released " +
                  "ORDER BY gamesales.year_released;";
                  
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
    var sqlStmt = "SELECT   rank_id, game_name, platform, year_released, genre, publisher, sales " +
                  "FROM     gamesales " +
                  "LEFT JOIN genres ON gamesales.genre_id=genres.genre_id " +
                  "LEFT JOIN publisher ON gamesales.publisher_id=publisher.publisher_id " +
                  "LEFT JOIN platforms ON gamesales.platform_id=platforms.platform_id " +
                  "ORDER BY gamesales.rank_id " +
                  "LIMIT    10;";
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