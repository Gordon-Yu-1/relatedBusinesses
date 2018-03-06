const express = require('express');
const database = require('../db/seed_db.js');

const router = express.Router();

router.route('/businessId')
  .get((req, res) => {
    database.retrieve(10)
      .then((relatedBizs) => {
        res.send(relatedBizs);
      })
      .catch((error) => {
        res.status(500).send(error);
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
