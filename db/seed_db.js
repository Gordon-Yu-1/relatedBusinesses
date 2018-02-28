// example from Full-Stack Review

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Promise = require('bluebird');

mongoose.connect('mongodb://localhost/related');

const relatedBizSchema = mongoose.Schema({
  id: Number,
  businessName: String,
  firstImage: String,
  latitude: Number,
  longitude: Number,
  avgRating: Number,
  quantityRatings: Number,
  fullReview: String,
  oneLineReview: String,
  metatags: Array, // double check this syntax
  listsWithThisBiz: Array, // double check this syntax
});

: