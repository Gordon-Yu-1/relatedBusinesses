const express = require('express');
const router = require('./router.js');

const app = express();

const host = '127.0.0.1';
const port = 9002;

app.use('/biz/:bizId', express.static(`${__dirname}/../public`));

app.use('/', router);

app.listen(port, host, () => {
  console.log('Related Bizs is now listening on port', port);
});

module.exports = app;
