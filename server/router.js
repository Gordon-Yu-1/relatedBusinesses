const express = require('express');
const database = require('../db/database.js');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.status(200).send('Hello');
  });

router.route('/biz/:bizId')
  .get((req, res) => {
    database();
    database.retrieve(203)
      .then((data) => {
        res.status(200).send(JSON.stringify(data));
      })
      .catch((error) => {
        console.log('Error with retrieval, ', error);
      });
  });

router.route('/favicon.ico')
  .get((req, res) => {
    res.end();
  });

router.route('/test')
  .get((req, res) => {
    database.retrieve(10)
      .then((dataset) => {
        console.log('Inside Test!');
        res.send('Yellow');
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

module.exports = router;
