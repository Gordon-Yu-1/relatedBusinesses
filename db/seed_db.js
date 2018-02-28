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

// let Repo = mongoose.model('Repo', repoSchema);

// let save = repos => {
//     repos.forEach(repo => {
//       Repo.find({id: repo.id})
//       .then(docs => {
//         if (docs.length === 0) {
//           Repo.create(repo);
//         } 
//       })
//       .catch(error => console.error(error));
//     });
// };

// let retrieve = (num = 25, sortBy = 'updated', direction = -1) => {
//   if (([-1, 'desc', 'descending']).indexOf(direction) !== -1) {
//     sortBy = `-${sortBy}`;
//   }
//   return new Promise((resolve, reject) => {
//     Repo.find()
//       .sort(sortBy)
//       .limit(num)
//       .exec()
//     .then(results => resolve(results))
//     .catch(error => reject(error));
//   });
// }

// console.log('made the schema');

// module.exports.save = save;
// module.exports.retrieve = retrieve;