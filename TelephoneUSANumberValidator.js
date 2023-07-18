// USA Telephone Number Validator

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

function telephoneCheck(str) {
  // if NOT numbers or valid sybmbols remmain then return false
  let RegExNonNumbicOrSymbols = /[^0-9-)( ]/g;
  // console.log(
  //   "has RegExNonNumbicOrSymbols ",
  //   str.match(RegExNonNumbicOrSymbols)
  // );
  if (str.match(RegExNonNumbicOrSymbols) != null) return false;

  // remove spaces
  let newStr = str.replaceAll(" ", "");

  // find the area code pattern (999)
  // console.log("found (", newStr, "indexOf (", newStr.indexOf("("));
  // console.log("found (", newStr, "indexOf )", newStr.indexOf(")"));
  if (newStr.indexOf("(") >= 0 || newStr.indexOf(")") >= 0) {
    // console.log("did ew find  a area code >>", newStr);
    let RegExAreaCode = /[(][0-9]{3}[)]/g;
    let potentionalAearCodeArr = newStr.match(RegExAreaCode);
    // console.log(str, "Area code", potentionalAearCodeArr);
    if (potentionalAearCodeArr == null) return false;
  }

  // if it has dash in it nust end with 999-9999  or 999-999-9999 pattern
  if (newStr.indexOf("-") >= 0) {
    console.log(newStr, "looking for dashes", newStr.indexOf("-"));
    // if the str starts with a - return false
    if (newStr[0] === "-") return false;

    let RegExOneDashPattern = /[0-9]{3}-[0-9]{4}$/g;
    let OneDashPattern = newStr.match(RegExOneDashPattern);
    console.log("OneDashPattern ", OneDashPattern);

    let RegExTwoDashPattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}$/g;
    let TwoDashPattern = newStr.match(RegExTwoDashPattern);
    console.log("TwoDashPattern ", TwoDashPattern);

    if (OneDashPattern == null && TwoDashPattern == null) return false;
  }

  // remove () brackets spaces dashes
  const regexSymbols = /[- )(]/gi;
  newStr = str.replaceAll(regexSymbols, "");
  console.log(str, newStr);

  // only 2 valid lengths 10 or 11 otherwise retuen false
  if (newStr.length == 11 && newStr[0] != "1") return false;
  // if len 11 and first dight not 1 return false
  console.log(newStr, newStr.length);
  if (newStr.length == 10 || newStr.length == 11) return true;
  // return true

  return false;
}

// console.log(telephoneCheck("555-555-5555"));

// telephoneCheck("555-555-5555"), " 555-555-5555 should return a boolean.")

console.log(
  telephoneCheck("1 555-555-5555"),
  "1 555-555-5555 should return true."
);
// console.log(telephoneCheck("1 (555) 555-5555"), "should return true.");
// console.log(telephoneCheck("5555555555"), "should return true.");
// console.log(telephoneCheck("555-555-5555"), " should return true.");
// console.log(telephoneCheck("(555)555-5555"), " should return true.");
// console.log(telephoneCheck("1(555)555-5555"), "should return true.");
// console.log(telephoneCheck("555-5555"), "should return false.");
// console.log(telephoneCheck("5555555"), " should return false.");
// console.log(
//   telephoneCheck("1 555)555-5555"),
//   "1 555)555-5555 should return false."
// );
// console.log(telephoneCheck("1 555 555 5555"), "should return true.");
// console.log(telephoneCheck("1 456 789 4444"), "should return true.");
// console.log(telephoneCheck("123**&!!asdf#"), "should return false.");
// console.log(telephoneCheck("55555555"), "should return false.");

// console.log(telephoneCheck("(6054756961)"), "should return false.");

// console.log(telephoneCheck("2 (757) 622-7382") should return false.)
// console.log(telephoneCheck("0 (757) 622-7382") should return false.)
console.log(
  telephoneCheck("-1 (757) 622-7382"),
  "-1 (757) 622-7382 should return false."
);
// console.log(telephoneCheck("2 757 622-7382") should return false.)
// console.log(telephoneCheck("10 (757) 622-7382") should return false.)
// console.log(telephoneCheck("27576227382") should return false.)
// console.log(telephoneCheck("(275)76227382") should return false.)
// console.log(telephoneCheck("2(757)6227382") should return false.)
// console.log(telephoneCheck("2(757)622-7382") should return false.)
// console.log(
//   telephoneCheck("555)-555-5555"),
//   "555)-555-5555 should return false."
// );
// console.log(
//   telephoneCheck("(555-555-5555"),
//   "(555-555-5555 should return false."
// );
// console.log(
//   telephoneCheck("(555)5(55?)-5555"),
//   "(555)5(55?)-5555 should return false."
// );
console.log(
  telephoneCheck("55 55-55-555-5"),
  "55 55-55-555-5 should return false."
);
// console.log(telephoneCheck("11 555-555-5555") should return false.)
