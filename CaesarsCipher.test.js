import rot13 from "./CaesarsCipher";
describe("Caesars Cipher rot13 tests", () => {
  test("should return the string 'FREE CODE CAMP'", () => {
    const strResult = `FREE CODE CAMP`;
    let result = rot13("SERR PBQR PNZC");
    expect(result).toBe(strResult);
  });

  test("should return the string 'FREE PIZZA!'", () => {
    const strResult = `FREE PIZZA!`;
    let result = rot13("SERR CVMMN!");
    expect(result).toBe(strResult);
  });

  test("should return the string FREE LOVE?", () => {
    const strResult = `FREE LOVE?`;
    let result = rot13("SERR YBIR?");
    expect(result).toBe(strResult);
  });

  test("should return the string ..QUICK BROWN FOX", () => {
    const strResult = `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`;
    const code = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.";
    let result = rot13(code);
    expect(result).toBe(strResult);
  });
});

import {
  _locationInAlphabet,
  _isInAlphabet,
  _newRotaedLocation,
} from "./CaesarsCipher";

describe("test private methods", () => {
  describe("test _isInAlphabet", () => {
    test("A should first location in alphabet and return 0", () => {
      let result = _isInAlphabet("A");
      expect(result).toBe(true);
    });
    test("Z should last location in Alphbet and return 25", () => {
      let result = _isInAlphabet("Z");
      expect(result).toBe(true);
    });
    test("1 should not be in any location in Alphbet and return -1", () => {
      let result = _isInAlphabet("1");
      expect(result).toBe(false);
    });
    test("a symbol should not be in any location in Alphbet and return -1", () => {
      let result = _isInAlphabet("!");
      expect(result).toBe(false);
    });
  });

  describe("test _locationInAlphabet", () => {
    test("A should first location in alphabet and return 0", () => {
      let result = _locationInAlphabet("A");
      expect(result).toBe(0);
    });
    test("Z should last location in Alphbet and return 25", () => {
      let result = _locationInAlphabet("Z");
      expect(result).toBe(25);
    });
    test("1 should not be in any location in Alphbet and return -1", () => {
      let result = _locationInAlphabet("1");
      expect(result).toBe(-1);
    });
    test("a symbol should not be in any location in Alphbet and return -1", () => {
      let result = _locationInAlphabet("!");
      expect(result).toBe(-1);
    });
  });

  describe("test _newRotaedLocation", () => {
    test("the 0 location is rotated to 13", () => {
      let result = _newRotaedLocation(0);
      expect(result).toBe(13);
    });

    test("the 12 location is rotated to 25", () => {
      let result = _newRotaedLocation(12);
      expect(result).toBe(25);
    });

    test("the 13 location is rotated to 0", () => {
      let result = _newRotaedLocation(13);
      expect(result).toBe(0);
    });

    test("the 25 location is rotated to 12", () => {
      let result = _newRotaedLocation(25);
      expect(result).toBe(12);
    });
  });
});
