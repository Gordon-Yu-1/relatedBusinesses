
const mongoose = require('mongoose');
const dupe = require('./Sues-fake-data.js');
const teamMockup = require('./mockupData.js');
const fakeRelatedBizGenerator = require('./fakeData.js');

// mongoose.Promise = require('bluebird');
// const Promise = require('bluebird');

mongoose.connect('mongodb://localhost/related'); // name of db = related
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connection to the DB established!!');
});

// Subschema

const relatedBizSchema = mongoose.Schema({
  originalId: Number,
  businessName: String,
  firstImage: String,
  latitude: Number,
  longitude: Number,
  avgRating: Number,
  quantityRatings: Number,
  fullReview: String,
  oneLineReview: String,
  metatags: [String], // double check this syntax
  listsWithThisBiz: [String], // double check this syntax
});

const BusinessModel = mongoose.model('relatedbizs', relatedBizSchema); // name of collection = relateds

const save = (business) => {
  const bizCollection = new BusinessModel(business);
  bizCollection.collection.insertOne(business);
};

const saveMany = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    console.log('You got inside SaveMany!');
    save(array[i]);
  }
};

const promise = new Promise((res, rej) => {
  fakeRelatedBizGenerator(teamMockup, (err, data) => {
    res(data);
  });
}).then((resolvedThing) => {
  saveMany(resolvedThing);
});

const retrieve = (bizId) => {
  BusinessModel.find({ originalId: bizId })
    .sort('-avgRating')
    .limit(10)
    .exec();
};

// module.exports.save = save;
module.exports.retrieve = retrieve;
module.exports.Business = BusinessModel;
