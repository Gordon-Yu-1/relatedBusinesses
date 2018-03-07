
const mongoose = require('mongoose');
const dupe = require('./Sues-fake-data.js');
// mongoose.Promise = require('bluebird');
// const Promise = require('bluebird');

mongoose.connect('mongodb://localhost/related');
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connection to the DB established!!');
});

// Subschema

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
  metatags: [String], // double check this syntax
  listsWithThisBiz: [String], // double check this syntax
});

const BusinessModel = mongoose.model('relateds', relatedBizSchema);

const save = (business) => {
  let bizCollection = new BusinessModel(business);
  BusinessModel.insertOne()
  bizCollection.collection.insertOne(business);
};

const saveMany = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
    save(array[i]);
  }
};

saveMany(dupe);

// const save = (businesses) => {
//   businesses.forEach((business) => {
//     Business.find({ id: business.id })
//       .then((docs) => {
//         if (docs.length === 0) {
//           Business.create(business);
//         }
//       })
//       .catch(error => console.error(error));
//   });
// };

// const retrieve = (num = 10) => {
//   return new Promise((resolve, reject) => {
//     Business.find()
//       .sort('-avgRating')
//       .limit(num)
//       .exec()
//       .then(results => resolve(results))
//       .catch(error => reject(error));
//   });
// };

// console.log('made the schema');

//module.exports.save = save;
// module.exports.retrieve = retrieve;

// module.exports.Business = Business;

// export the model and use native methods rather than passing these fns around.