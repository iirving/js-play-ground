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

  let NewArr = str.split("").map((element, x) => {
    //    find alpha value
    let loc = alphabet.indexOf(element);
    //  if alphabetic
    if (loc >= 0) {
      //    increment by ROT_VALUE
      //    if > ROT_TOP then new value is ROT_TOP - alpha value
      if (loc + ROT_VALUE >= MAX_ALPHA) {
        loc = loc + ROT_VALUE - MAX_ALPHA;
      } else {
        loc = loc + ROT_VALUE;
      }
    }
    return loc >= 0 ? alphabet[loc] : element;
  });
  return NewArr.join("");
}

export { rot13 };
