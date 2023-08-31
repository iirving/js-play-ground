const { addTogether } = require("./ArgumentsOptional");

describe("Arguments Optional function tests", () => {
  test("2 and 3 should return 5", () => {
    expect(addTogether(2, 3)).toBe(5);
  });

  test("23 and 30 should return 53", () => {
    expect(addTogether(23, 30)).toBe(53);
  });

  test("string 3 and 3 should return undefined", () => {
    result = addTogether("2", 3);
    expect(result).toBe(undefined);
  });

  test("5 and undefined should return undefined", () => {
    result = addTogether(5, undefined);
    expect(result).toBe(undefined);
  });

  test("a string should return undefined", () => {
    result = addTogether("ianirving is great");
    expect(result).toBe(undefined);
  });

  test("passing in a signle number should resturn a function", () => {
    result = addTogether(6);
    type = typeof result;
    expect(type).toBe("function");
  });

  test("addTogether(5)(7) should return 12", () => {
    result = addTogether(5)(7);
    expect(result).toBe(12);
  });

  test("addTogether(2)([3] should return undefined", () => {
    result = addTogether(2)([3]);
    expect(result).toBe(undefined);
  });

  test("addTogether(2,'3') should return undefined", () => {
    result = addTogether(2, "3");
    expect(result).toBe(undefined);
  });
});
