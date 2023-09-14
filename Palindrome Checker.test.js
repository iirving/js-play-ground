import palindrome from "./Palindrome Checker";

describe("test palindrome function ", () => {
  it("should return a boolean true", () => {
    let result = palindrome("eye");
    let type = typeof result;
    expect(type).toBe("boolean");
    expect(result).toBe(true);
  });

  it("should return a boolean false", () => {
    let result = palindrome("eyeNOT");
    let type = typeof result;
    expect(type).toBe("boolean");
    expect(result).toBe(false);
  });

  it(' "_eye" should return true. ', () => {
    expect(palindrome("_eye")).toBe(true);
  });

  it(' "race car" should return true. ', () => {
    expect(palindrome("race car")).toBe(true);
  });

  it(' "not a palindrome" should return false. ', () => {
    expect(palindrome("not a palindrome")).toBe(false);
  });

  it(' "A man, a plan, a canal. Panama" should return true. ', () => {
    let str = "A man, a plan, a canal. Panama";
    expect(palindrome(str)).toBe(true);
  });

  it(' "never odd or even" should return true. ', () => {
    let str = "never odd or even";
    expect(palindrome(str)).toBe(true);
  });

  it(' "nope" should return false. ', () => {
    let str = "nope";
    expect(palindrome(str)).toBe(false);
  });

  it(' "almostomla" should return false. ', () => {
    let str = "almostomla";
    expect(palindrome(str)).toBe(false);
  });

  it(' "almostomla" should return false. ', () => {
    let str = "almostomla";
    expect(palindrome(str)).toBe(false);
  });

  it(' "My age is 0, 0 si ega ym." should return true. ', () => {
    let str = "My age is 0, 0 si ega ym.";
    expect(palindrome(str)).toBe(true);
  });

  it(' "1 eye for of 1 eye." should return false. ', () => {
    let str = "1 eye for of 1 eye.";
    expect(palindrome(str)).toBe(false);
  });

  it(' "0_0 (: /- :) 0-0" should return true. ', () => {
    let str = "0_0 (: /- :) 0-0";
    expect(palindrome(str)).toBe(true);
  });

  it(' "five|_/|four" should return false. ', () => {
    let str = "five|_/|four";
    expect(palindrome(str)).toBe(false);
  });
});
