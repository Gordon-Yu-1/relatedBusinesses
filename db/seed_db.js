
const mongoose = require('mongoose');
const database = require('./database.js');
const teamMockup = require('./mockupData.js');
const fakeRelatedBizGenerator = require('./fakeData.js');

const promise = new Promise((res, rej) => {
  fakeRelatedBizGenerator(teamMockup, (err, data) => {
    res(data);
  });
}).then((resolvedThing) => {
  database.saveMany(resolvedThing);
});
