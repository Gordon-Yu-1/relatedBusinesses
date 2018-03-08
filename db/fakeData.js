const faker = require('faker');

const generateSingleRelatedBusiness = (inputId) => {
  const singleFakeBiz = {};
  singleFakeBiz.originalId = inputId;
  singleFakeBiz.businessName = faker.company.companyName();
  singleFakeBiz.firstImage = faker.image.business();
  singleFakeBiz.latitude = faker.address.latitude();
  singleFakeBiz.longitude = faker.address.longitude();
  singleFakeBiz.avgRating = Math.floor(Math.random() * 21) / 4;
  singleFakeBiz.quantityRatings = Math.floor(Math.random() * 18000);
  singleFakeBiz.fullReview = faker.lorem.paragraph();
  singleFakeBiz.oneLineReview = faker.lorem.sentence();
  singleFakeBiz.metatags = ['hardCodedMetatagList', 'burgers', 'tacos', 'tacqueria', 'steve jobs'];
  singleFakeBiz.listsWithThisBiz = ['These Lists are Hardcoded', 'Burger Places in SF', 'Barbara Johnsons Favorite Places', 'Bobs Fave Tacquerias'];
  // singleFakeBiz.metatags = [];
  // for (let j = 0; j < Math.ceil(Math.random() * 5); j += 1) {
  //   singleFakeBiz.metatags.push(faker.commerce.department);
  // }
  // singleFakeBiz.listsWithThisBiz = [];
  // for (let k = 0; k < Math.floor(Math.random() * 4); k += 1) {
  //   singleFakeBiz.listsWithThisBiz.push({
  //     listName: faker.lorem.words,
  //     listDescription: faker.lorem.sentences,
  //   });
  // }
  return singleFakeBiz;
};

const generateManyRelatedBizs = (someArray, cb) => {
  // given a particular mainPage biz, generate 10 relatedBizs for Ads
  // always will generate 10 businesses related to an input biz.
  const allRelatedBusinesses = [];
  for (let j = 0; j < someArray.length; j += 1) {
    let thisBiz = someArray[j];
    for (let i = 0; i < 10; i += 1) {
      allRelatedBusinesses.push(generateSingleRelatedBusiness(thisBiz.id));
    }
  }
  cb(null, allRelatedBusinesses);
};


module.exports = generateManyRelatedBizs;

// console.log(generateManyRelatedBizs());
