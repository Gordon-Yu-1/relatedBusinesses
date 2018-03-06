const express = require('express');
const parser = require('body-parser');
const database = require('../db/seed_db.js');
const path = require('path');
const router = require('./router.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));

const host = '127.0.0.1';
const port = 3000;

app.listen(3000, () => {
  console.log('Now listening on port ', port);
});

app.use(express.static(`${__dirname}/../public/dist`));

// create an endpoint to serve
// manually save a file through mongod
// try to find it

app.get('/test', (req, res) => {
  database.retrieve(10)
    .then((relatedBizs) => {
      console.log('Inside Test!');
      res.send('Yellow');
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});


app.use('/', router);

module.exports = app;

