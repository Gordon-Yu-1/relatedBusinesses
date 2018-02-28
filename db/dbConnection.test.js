const {save, retrieve} = require('./seed_db.js');

// describe('fake business generation', () => {
//   test('should generate an array:', () => {
//     expect(Array.isArray(fakeBusinesses)).toBe(true);
//   });
//   test('should generate an array of objects:', () => {
//     expect(typeof fakeBusinesses[0]).toBe('object');
//   });
//   test('should have 10 properties:', () => {
//     expect(Object.keys(fakeBusinesses[0]).length).toBe(10);
//   });
// });

// describe('metatag generation', () => {
//   test('should generate an array of metatags:', () => {
//     expect(Array.isArray(fakeBusinesses[0].metatags)).toBe(true);
//   });

//   test('Should generate at least one, and no more than five, metatags:', () => {
//     for (let i = 0; i < fakeBusinesses.length; i += 1) {
//       expect(fakeBusinesses[i].metatags.length < 6).toBe(true);
//       expect(fakeBusinesses[i].metatags.length > 0).toBe(true);
//     }
//   });
// });

// describe('list generation', () => {
//   test('should generate an array of lists:', () => {
//     expect(Array.isArray(fakeBusinesses[0].metatags)).toBe(true);
//   });

//   test('should generate at least zero, and no more than three, lists:', () => {
//     for (let i = 0; i < fakeBusinesses.length; i += 1) {
//       expect(fakeBusinesses[i].listsWithThisBiz.length < 4).toBe(true);
//       expect(fakeBusinesses[i].listsWithThisBiz.length >= 0).toBe(true);
//     }
//   });
//   test('should generate the correct shape of lists:', () => {
//     for (let i = 0; i < fakeBusinesses.length; i += 1) {
//       if(fakeBusinesses[i].listsWithThisBiz.length > 0) {
//         const firstList = fakeBusinesses[i].listsWithThisBiz[0];
//         expect(typeof firstList).toBe('object');
//         expect(Object.keys(firstList).length).toBe(3);
//       }
//     }
//   });
// });