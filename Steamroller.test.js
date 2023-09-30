import steamrollArray from "./Steamroller";

describe("test steamrollArray", () => {
  it('[[["a"]], [["b"]]] should return ["a", "b"]', () => {
    let testElemnet = [[["a"]], [["b"]]];
    let result = steamrollArray(testElemnet);
    expect(result).toEqual(["a", "b"]);
  });

  it("[1, [2], [3, [[4]]]] should return [1, 2, 3, 4]", () => {
    let testElemnet = [1, [2], [3, [[4]]]];
    let result = steamrollArray(testElemnet);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("[1, [], [3, [[4]]]] should return [1, 3, 4]", () => {
    let testElemnet = [1, [], [3, [[4]]]];
    let result = steamrollArray(testElemnet);
    expect(result).toEqual([1, 3, 4]);
  });

  it("[1, {}, [3, [[4]]]] should return [1, {}, 3, 4]", () => {
    let testElemnet = [1, {}, [3, [[4]]]];
    let result = steamrollArray(testElemnet);
    expect(result).toEqual([1, {}, 3, 4]);
  });
});
