// example from Full-Stack Review

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Promise = require('bluebird');

mongoose.connect('mongodb://127.0.0.1:27107');
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('DB!');
});

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

const Business = mongoose.model('Business', relatedBizSchema);

const save = (businesses) => {
  businesses.forEach((business) => {
    Business.find({ id: business.id })
      .then((docs) => {
        if (docs.length === 0) {
          Business.create(business);
        }
      })
      .catch(error => console.error(error));
  });
};

const retrieve = (num = 5) => {
  return new Promise((resolve, reject) => {
    Business.find()
      .sort('-avgRating')
      .limit(num)
      .exec()
      .then(results => resolve(results))
      .catch(error => reject(error));
  });
};

// console.log('made the schema');

// module.exports.save = save;
// module.exports.retrieve = retrieve;

module.exports.Business = Business;

// export the model and use native methods rather than passing these fns around.
