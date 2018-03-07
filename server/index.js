const express = require('express');
const router = require('./router.js');

const app = express();

const host = '127.0.0.1';
const port = 3000;

app.listen(3000, () => {
  console.log('Now listening on port ', port);
});

app.use(express.static(`${__dirname}/../public`));

app.use('/', router);

module.exports = app;
