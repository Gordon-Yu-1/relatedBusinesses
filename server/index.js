const express = require('express');
const database = require('../db/seed_db.js');
const path = require('path');
const router = require('./router.js');

const app = express();

const host = '127.0.0.1';
const port = 3000;

app.listen(3000, () => {
  console.log('Now listening on port ', port);
});

app.use('/biz/:bizId', express.static(`${__dirname}/../public/dist`));

// create an endpoint to serve
// manually save a file through mongod
// try to find it

app.use('/', router);

module.exports = app;
