// Drop it
// Given the array arr, iterate through and remove each element starting from the first element
// (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise,
// arr should be returned as an empty array.

const { dropElements } = require("./di");

// console.log(
//   dropElements([1, 2, 3, 4], function (n) {
//     return n >= 3;
//   })
// );

describe("test dropElements function ", () => {
  test("should return [7, 4].", () => {
    let result = dropElements([1, 2, 3, 7, 4], function (n) {
      return n > 3;
    });

    expect(result).toEqual([7, 4]);
  });
});

// console.log(
//   dropElements([0, 1, 0, 1], function (n) {
//     return n === 1;
//   })
// );

// console.log(
//   dropElements([1, 2, 3, 7, 4], function (n) {
//     return n > 3;
//   })
// ); // should return [7, 4].

// console.assert(
//   dropElements([1, 2, 3, 4], function (n) {
//     return n >= 3;
//   }),
//   [3, 4],
//   "should return [3, 4]."
// );

// console.log(
//   dropElements([0, 1, 0, 1], function (n) {
//     return n === 1;
//   })
// ); //) should return [1, 0, 1].

// console.log(:dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
); // should return [].
// console.log(:dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
// console.log(:dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
