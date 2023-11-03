import convertToRoman from "./RomanNumeralConverter";

describe("test Roman Numeral Converter function ", () => {
  it("2 should return the string II", () => {
    let result = convertToRoman(2);

    expect(result).toBe("II");
  });

  it("3 should return the string III.", () => {
    let result = convertToRoman(3);

    expect(result).toBe("III");
  });

  it("4 should return the string IV.", () => {
    let result = convertToRoman(4);

    expect(result).toBe("IV");
  });

  it("5 should return the string V.", () => {
    let result = convertToRoman(5);

    expect(result).toBe("V");
  });

  it("7 should return the string VII.", () => {
    let result = convertToRoman(7);

    expect(result).toBe("VII");
  });

  it("9 should return the string IX.", () => {
    let result = convertToRoman(9);

    expect(result).toBe("IX");
  });

  it("12 should return the string XII.", () => {
    let result = convertToRoman(12);

    expect(result).toBe("XII");
  });

  it("16 should return the string XVI.", () => {
    let result = convertToRoman(16);

    expect(result).toBe("XVI");
  });
  it("29 should return the string XXIX.", () => {
    let result = convertToRoman(29);

    expect(result).toBe("XXIX");
  });

  it("44 should return the string XLIV.", () => {
    let result = convertToRoman(44);

    expect(result).toBe("XLIV");
  });

  it("45 should return the string XLV.", () => {
    let result = convertToRoman(45);

    expect(result).toBe("XLV");
  });
  it("68 should return the string XXIX.", () => {
    let result = convertToRoman(68);

    expect(result).toBe("LXVIII");
  });

  it("83 should return the string XII.", () => {
    let result = convertToRoman(83);

    expect(result).toBe("LXXXIII");
  });

  it("97 should return the string XCVII.", () => {
    let result = convertToRoman(97);

    expect(result).toBe("XCVII");
  });

  it("99 should return the string XCIX.", () => {
    let result = convertToRoman(99);

    expect(result).toBe("XCIX");
  });

  it("400 should return the string CD.", () => {
    let result = convertToRoman(400);

    expect(result).toBe("CD");
  });

  it("500 should return the string D.", () => {
    let result = convertToRoman(500);

    expect(result).toBe("D");
  });

  it("501 should return the string DI.", () => {
    let result = convertToRoman(501);

    expect(result).toBe("DI");
  });

  it("649 should return the string DCXLIX.", () => {
    let result = convertToRoman(649);

    expect(result).toBe("DCXLIX");
  });

  it("798 should return the string DCCXCVIII.", () => {
    let result = convertToRoman(798);

    expect(result).toBe("DCCXCVIII");
  });

  it("891 should return the string DCCCXCI.", () => {
    let result = convertToRoman(891);

    expect(result).toBe("DCCCXCI");
  });

  it("1000 should return the string M.", () => {
    let result = convertToRoman(1000);

    expect(result).toBe("M");
  });

  it("1004 should return the string MIV.", () => {
    let result = convertToRoman(1004);

    expect(result).toBe("MIV");
  });

  it("1006 should return the string MVI.", () => {
    let result = convertToRoman(1006);

    expect(result).toBe("MVI");
  });

  it("1023 should return the string XXIX.", () => {
    let result = convertToRoman(1023);

    expect(result).toBe("MXXIII");
  });

  it("2014 should return the string MMXIV.", () => {
    let result = convertToRoman(2014);

    expect(result).toBe("MMXIV");
  });

  it("3999 should return the string MMMCMXCIX.", () => {
    let result = convertToRoman(3999);

    expect(result).toBe("MMMCMXCIX");
  });
  test("should return 'CC' for 200", () => {
    const input = 200;
    const expectedOutput = "CC";
    const result = convertToRoman(input);
    expect(result).toBe(expectedOutput);
  });
});
