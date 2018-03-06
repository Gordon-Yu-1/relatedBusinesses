const express = require('express');
const database = require('../db/seed_db.js');
const helpers = require('./helpers.js');

const router = express.Router();

router.route('/:businessId/related')
  .get((req, res) => {
    database.retrieve(10)
      .then((relatedBizs) => {
        res.send(relatedBizs);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

module.exports = router;
