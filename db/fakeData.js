const faker = require('faker');


const generateSingleRelatedBusiness = () => {
  const singleFakeBiz = {};
  singleFakeBiz.id = Math.floor(Math.random() * 1000000);
  singleFakeBiz.businessName = faker.company.companyName;
  singleFakeBiz.firstImage = faker.image.business;
  singleFakeBiz.latitude = faker.address.latitude;
  singleFakeBiz.longitude = faker.address.longitude;
  singleFakeBiz.avgRating = Math.floor(Math.random() * 21) / 4;
  singleFakeBiz.quantityRatings = Math.floor(Math.random() * 18000);
  singleFakeBiz.fullReview = faker.lorem.paragraph;
  singleFakeBiz.oneLineReview = faker.lorem.sentence;
  singleFakeBiz.metatags = ['hardCodedMetatagList', 'burgers', 'tacos', 'tacqueria', 'steve jobs'];
  singleFakeBiz.listsWithThisBiz = ['These Lists are Hardcoded', 'Burger Places in SF', 'Barbara Johnsons Favorite Places', 'Bobs Fave Tacquerias'];
  // singleFakeBiz.metatags = [];
  // singleFakeBiz.metatags.length = Math.ceil(Math.random() * 5);
  // for (let j = 0; j < singleFakeBiz.metatags.length; j += 1) {
  //   singleFakeBiz.metatags[j] = faker.commerce.department;
  // }
  // singleFakeBiz.listsWithThisBiz = [];
  // const listLength = Math.floor(Math.random() * 4);
  // if (listLength < 0) {
  //   for (let k = 0; k < listLength; k += 1) {
  //     singleFakeBiz.listsWithThisBiz.push({
  //       listName: faker.lorem.words,
  //       listBusinessesTotal: singleFakeBiz.listsWithThisBiz.length,
  //       listDescription: faker.lorem.sentences,
  //     });
  //   }
  // }
  return singleFakeBiz;
};

const generateManyRelatedBizs = () => {
  // given a particular mainPage biz, generate 10 relatedBizs for Ads
  // always will generate 10 businesses related to an input biz.
  const relatedBusinesses = [];
  for (let i = 0; i < 10; i += 1) {
    relatedBusinesses.push(generateSingleRelatedBusiness());
  }
  return relatedBusinesses;
};


module.exports = generateManyRelatedBizs;

// console.log(generateManyRelatedBizs());
