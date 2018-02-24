const faker = require('faker');

const fakeData = {};

for (let i = 0; i < 200; i += 1) {
  fakeData.businessName = faker.company.companyName;
  fakeData.firstImage = faker.image.business;
  fakeData.latitude = faker.address.latitude;
  fakeData.longitude = faker.address.longitude;
  fakeData.avgRating = Math.floor(Math.random() * 21) / 4;
  fakeData.quantityRatings = Math.floor(Math.random() * 18000);
  fakeData.fullReview = faker.lorem.paragraph;
  const indexOfFirstPeriod = fakeData.fullReview.indexOf('.');
  if (indexOfFirstPeriod > -1) {
    fakeData.oneLineReview = fakeData.fullReview.slice(0, indexOfFirstPeriod);
  } else {
    fakeData.oneLineReview = faker.hacker.phrase;
  }
  fakeData.metatags = [];
  fakeData.metatags.length = Math.ceil(Math.random() * 5);
  for (let j = 0; j < fakeData.metatags.length; j += 1) {
    fakeData.metatags[j] = faker.commerce.department;
  }
  fakeData.listsWithThisBiz = [];
  const listLength = Math.floor(Math.random() * 4);
  if (listLength < 0) {
    for (let k = 0; k < listLength; k += 1) {
      fakeData.listsWithThisBiz.push({
        listName: faker.lorem.words,
        listBusinessesTotal: fakeData.listsWithThisBiz.length,
        listDescription: faker.lorem.sentences,
      });
    }
  }
}

console.log(fakeData.businessName);
