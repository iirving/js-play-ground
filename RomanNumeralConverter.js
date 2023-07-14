// Roman Numeral Converter
// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// All roman numerals answers should be provided in upper-case.

function convertOnesToRoman(num) {
  if (num > 9) return "";

  if (num > 0 && num < 4) {
    return "I".repeat(num);
  } else if (num === 4) {
    return "IV";
  } else if (num >= 5 && num < 9) {
    return "V".concat("I".repeat(num - 5));
  } else if (num === 9) {
    return "IX";
  }

  return "";
}

function convertTenssToRoman(num) {
  let numOfTens = num / 10;
  // console.log("tens=", num, numOfTens);

  if (numOfTens <= 0) return "";

  if (num >= 10 && num <= 30) {
    return "X".repeat(numOfTens);
  } else if (num === 40) {
    return "XL";
  } else if (num >= 50 && num < 90) {
    return "L".concat("X".repeat(numOfTens - 5));
  } else if (num === 90) {
    return "XC";
  }
  return "";
}

function convertHundredsToRoman(num) {
  let numOfHundreds = num / 100;
  // console.log("numOfHundreds=", num, numOfHundreds);
  // CM	900
  // D	500
  // CD	400
  // C	100

  if (numOfHundreds <= 0) return "";

  if (num >= 100 && num <= 300) {
    return "C".repeat(numOfHundreds);
  } else if (num === 400) {
    return "CD";
  } else if (num >= 500 && num < 900) {
    return "D".concat("C".repeat(numOfHundreds - 5));
  } else if (num === 900) {
    return "CM";
  }

  return "";
}

function convertThousandsToRoman(num) {
  // M	1000
  let numOfThousands = num / 1000;
  // console.log("numOfHundreds=", num, numOfThousands);

  if (numOfThousands <= 0 || num === 0) return "";

  return "M".repeat(numOfThousands);
}

function convertToRoman(num) {
  let singles = num % 10;
  let tens = num >= 10 ? (num % 100) - singles : 0;
  let hundreds = num >= 100 ? (num % 1000) - tens - singles : 0;
  let thousands = num >= 1000 ? (num % 10000) - hundreds - tens - singles : 0;

  // console.log(
  //   "thousands",
  //   thousands,
  //   "hundreds",
  //   hundreds,
  //   "tens",
  //   tens,
  //   "singles",
  //   singles
  // );

  let newStr =
    convertThousandsToRoman(thousands) +
    convertHundredsToRoman(hundreds) +
    convertTenssToRoman(tens) +
    convertOnesToRoman(singles);

  return newStr;
}

console.log(convertToRoman(36));

// convertToRoman(3999);

console.log(convertToRoman(2), "2 should return the string II.");
console.log(convertToRoman(3), "3 should return the string III.");
console.log(convertToRoman(4), "4 should return the string IV.");
console.log(convertToRoman(5), "5 should return the string V.");
console.log(convertToRoman(7), "7 should return the string V.");
console.log(convertToRoman(9), "9 should return the string IX.");
console.log(convertToRoman(12), "12 should return the string XII.");
console.log(convertToRoman(16), "16 should return the string XVI.");
console.log(convertToRoman(29), "29 should return the string XXIX.");
console.log(convertToRoman(44), "44 should return the string XLIV.");
console.log(convertToRoman(45), "45 should return the string XLV.");
console.log(convertToRoman(68), "68 should return the string LXVIII");
console.log(convertToRoman(83), "83 should return the string LXXXIII");
console.log(convertToRoman(97), "97 should return the string XCVII");
console.log(convertToRoman(99), "99 should return the string XCIX");

console.log(convertToRoman(400), "400 should return the string CD");
console.log(convertToRoman(500), "500 should return the string D");
console.log(convertToRoman(501), "501 should return the string DI");
console.log(convertToRoman(649), "649 should return the string DCXLIX");
console.log(convertToRoman(798), "798 should return the string DCCXCVIII");
console.log(convertToRoman(891), "891 should return the string DCCCXCI");

console.log(convertToRoman(1000), "1000 should return the string M");
console.log(convertToRoman(1004), "1004 should return the string MIV");
console.log(convertToRoman(1006), "1006 should return the string MVI");
console.log(convertToRoman(1023), "1023 should return the string MXXIII");
console.log(convertToRoman(2014), "2014 should return the string MMXIV");
console.log(convertToRoman(3999), "3999 should return the string MMMCMXCIX");
