const express = require('express');
const parser = require('body-parser');
const database = require('../db/seed_db.js');


const app = express();

app.use(express.static(`${__dirname}/../public/dist`));

