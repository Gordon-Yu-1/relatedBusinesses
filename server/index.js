const express = require('express');
const router = require('./router.js');

const app = express();

const host = '127.0.0.1';
const port = 3000;

app.use('/biz/:bizId', express.static(`${__dirname}/../public`));

app.use('/', router);

app.listen(3000, () => {
  console.log('Now listening on port ', port);
});

module.exports = app;
