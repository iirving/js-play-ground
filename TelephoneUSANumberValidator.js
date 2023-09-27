// USA Telephone Number Validator

// as defined @ https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number.
// The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
// Your job is to validate or reject the US phone number based on any combination of the formats provided
// above.
// The area code is required. If the country code is provided,
// you must confirm that the country code is 1.
// Return true if the string is a valid US phone number; otherwise return false.

export default function telephoneCheck(str) {
  // if NOT numbers or valid sybmbols remmain then return false
  let RegExNonNumbicOrSymbols = /[^0-9-)( ]/g;

  if (str.match(RegExNonNumbicOrSymbols) != null) return false;

  // remove spaces
  let newStr = str.replaceAll(" ", "");

  // find the area code pattern (999)
  if (newStr.indexOf("(") >= 0 || newStr.indexOf(")") >= 0) {
    let RegExAreaCode = /[(][0-9]{3}[)]/g;
    let potentionalAearCodeArr = newStr.match(RegExAreaCode);
    if (potentionalAearCodeArr == null) return false;
  }

  // if it has dash in it nust end with 999-9999  or 999-999-9999 pattern
  if (newStr.indexOf("-") >= 0) {
    // if the str starts with a - return false
    if (newStr[0] === "-") return false;

    let RegExOneDashPattern = /[0-9]{3}-[0-9]{4}$/g;
    let OneDashPattern = newStr.match(RegExOneDashPattern);

    let RegExTwoDashPattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}$/g;
    let TwoDashPattern = newStr.match(RegExTwoDashPattern);

    if (OneDashPattern == null && TwoDashPattern == null) return false;
  }

  // remove () brackets spaces dashes
  const regexSymbols = /[- )(]/gi;
  newStr = str.replaceAll(regexSymbols, "");

  // only 2 valid lengths 10 or 11 otherwise retuen false
  if (newStr.length == 11 && newStr[0] != "1") return false;
  // if len 11 and first dight not 1 return false
  if (newStr.length == 10 || newStr.length == 11) return true;

  return false;
}
