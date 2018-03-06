const faker = require('faker');
const database = require('./seed_db');

const generateSingleRelatedBusiness = () => {
  const singleFakeBiz = {};
  singleFakeBiz.id = 12398712398;
  singleFakeBiz.businessName = faker.company.companyName;
  singleFakeBiz.firstImage = faker.image.business;
  singleFakeBiz.latitude = faker.address.latitude;
  singleFakeBiz.longitude = faker.address.longitude;
  singleFakeBiz.avgRating = Math.floor(Math.random() * 21) / 4;
  singleFakeBiz.quantityRatings = Math.floor(Math.random() * 18000);
  singleFakeBiz.fullReview = faker.lorem.paragraph;
  singleFakeBiz.oneLineReview = faker.lorem.sentence;
  singleFakeBiz.metatags = [];
  singleFakeBiz.metatags.length = Math.ceil(Math.random() * 5);
  for (let j = 0; j < singleFakeBiz.metatags.length; j += 1) {
    singleFakeBiz.metatags[j] = faker.commerce.department;
  }
  singleFakeBiz.listsWithThisBiz = [];
  const listLength = Math.floor(Math.random() * 4);
  if (listLength < 0) {
    for (let k = 0; k < listLength; k += 1) {
      singleFakeBiz.listsWithThisBiz.push({
        listName: faker.lorem.words,
        listBusinessesTotal: singleFakeBiz.listsWithThisBiz.length,
        listDescription: faker.lorem.sentences,
      });
    }
  }
  return singleFakeBiz;
};

const generateManyRelatedBizs = () => {
  // always will generate 5 businessesrelated to an input biz.
  const relatedBusinesses = [];
  for (let i = 0; i < 5; i += 1) {
    relatedBusinesses.push(generateSingleRelatedBusiness());
  }
  return relatedBusinesses;
};

const fakeRelatedBusinesses = generateManyRelatedBizs();

database.Business // model with access to the connection

module.exports = fakeRelatedBusinesses;

// console.log(generateManyRelatedBizs());
