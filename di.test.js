import { dropElements } from "./di";

describe("test dropElements function ", () => {
  test("should return [7, 4].", () => {
    let result = dropElements([1, 2, 3, 7, 4], function (n) {
      return n > 3;
    });

    expect(result).toEqual([7, 4]);
  });

  test("should return [1, 0, 1].", () => {
    let result = dropElements([0, 1, 0, 1], function (n) {
      return n === 1;
    });

    expect(result).toEqual([1, 0, 2]);
  });

  test("should return [3, 4].", () => {
    let result = dropElements([1, 2, 3, 4], function (n) {
      return n >= 3;
    });

    expect(result).toEqual([3, 4]);
  });

  test("should return [].", () => {
    let result = dropElements([1, 2, 3, 4], function (n) {
      return n > 5;
    });

    expect(result).toEqual([]);
  });

  test("should return [7, 4].", () => {
    let result = dropElements([1, 2, 3, 7, 4], function (n) {
      return n > 3;
    });

    expect(result).toEqual([7, 4]);
  });

  test("should return [3, 9, 2].", () => {
    let result = dropElements([1, 2, 3, 9, 2], function (n) {
      return n > 2;
    });

    expect(result).toEqual([3, 9, 2]);
  });
});
