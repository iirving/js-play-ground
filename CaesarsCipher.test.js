import { rot13 } from "./CaesarsCipher";

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
