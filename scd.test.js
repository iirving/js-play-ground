import smallestCommons from "./scd";
import { evenlyDivisible } from "./scd";

describe("test Smallest Common Multiple module ", () => {
  describe("test smallestCommons function ", () => {
    it("[1, 5] should return 60", () => {
      let result = smallestCommons([1, 5]);
      expect(result).toBe(60);
    });

    it("[5, 1] should return 60", () => {
      let result = smallestCommons([5, 1]);
      expect(result).toBe(60);
    });
    it("[2, 10] should return 2520", () => {
      let result = smallestCommons([2, 10]);
      expect(result).toBe(2520);
    });
    it("[1, 13] should return 360360", () => {
      let result = smallestCommons([1, 13]);
      expect(result).toBe(360360);
    });

    // skipping this test because it takes a long time aka > 100 seconds
    it(
      "[23, 10] should return 6056820",
      () => {
        let result = smallestCommons([23, 10]);
        expect(result).toBe(5354228880);
      },
      120 * 1000
    );
  });

  describe("test evenlyDivisible function ", () => {
    test("60 should be evenlyDivisible by 4 ", () => {
      let result = evenlyDivisible(60, 4);
      expect(result).toBe(true);
    });
    test("60 should NOT be evenlyDivisible by 7 ", () => {
      let result = evenlyDivisible(60, 7);
      expect(result).toBe(false);
    });
  });
});

//console.log(evenlyDivisible(60, 4))
