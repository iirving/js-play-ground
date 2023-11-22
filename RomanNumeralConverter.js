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

  if (numOfThousands <= 0 || num === 0) return "";

  return "M".repeat(numOfThousands);
}

export default function convertToRoman(num) {
  let singles = num % 10;
  let tens = num >= 10 ? (num % 100) - singles : 0;
  let hundreds = num >= 100 ? (num % 1000) - tens - singles : 0;
  let thousands = num >= 1000 ? (num % 10000) - hundreds - tens - singles : 0;

  let newStr =
    convertThousandsToRoman(thousands) +
    convertHundredsToRoman(hundreds) +
    convertTenssToRoman(tens) +
    convertOnesToRoman(singles);

  return newStr;
}
