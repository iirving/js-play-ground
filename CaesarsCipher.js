// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
// In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation),
// but do pass them on.

function rot13(str) {
  const ROT_VALUE = 13;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const MAX_ALPHA = alphabet.length;

  //str to array
  //for each element
  let NewArr = str.split("").map((element, x) => {
    //    find alpha value
    let loc = alphabet.indexOf(element);
    // console.log(element, x, loc, MAX_ALPHA);
    //  if alphabetic
    if (loc >= 0) {
      //    increment by ROT_VALUE
      //    if > ROT_TOP then new value is ROT_TOP - alpha value
      if (loc + ROT_VALUE >= MAX_ALPHA) {
        loc = loc + ROT_VALUE - MAX_ALPHA;
      } else {
        loc = loc + ROT_VALUE;
      }
      // console.log("new loc", loc, alphabet[loc]);
    }
    return loc >= 0 ? alphabet[loc] : element;
  });
  // jion new array into str
  return NewArr.join("");

  return str;
}

// console.log(rot13("A"));

console.log(
  rot13("SERR PBQR PNZC"),
  "should decode to the string FREE CODE CAMP"
);

console.log(rot13("SERR CVMMN!"), "should decode to the string FREE PIZZA!");
console.log(rot13("SERR YBIR?"), "should decode to the string FREE LOVE?");

console.log(
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."),
  " should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
);
