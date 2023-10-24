// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
// In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation),
// but do pass them on.

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ROT_VALUE = 13;

function rot13(str) {
  return str
    .split("")
    .map((element, x) => {
      return _isInAlphabet(element) ? _rotateElement(element) : element;
    })
    .join("");
}

/**
 * get the location of the element in the alphabetic list
 * and use that to calucation the rotated location,
 * and then return the new alphabetic element based on the rotated location
 * @param {String} element to rotate
 * @returns {String} new reotoated element
 */
function _rotateElement(element) {
  return ALPHABET[_newRotaedLocation(_locationInAlphabet(element))];
}

/**
 * where from A to Z is the character located with A being 0 and Z begining 25 (25-1)
 * @param {String} character  - a single uppercase character
 * @returns {Number} location
 */
function _locationInAlphabet(character) {
  return ALPHABET.indexOf(character);
}
/**
 * is the character in the Alphabet
 * @param {String} character @param {string} character  - a single uppercase character
 * @returns {Boolean} true if location in Alphabet is greater than or equal to 0
 */
function _isInAlphabet(character) {
  return _locationInAlphabet(character) >= 0;
}

/**
 *  increment by ROT_VALUE
 *  if Rotoation would bring it past the end of the Alphabet (MAX_ALPHA)
 *  then start at the beging of the Alphabet
 * @param {Number} location
 * @returns {Number} a new single cahracter value location
 */
function _newRotaedLocation(location) {
  const MAX_ALPHA = ALPHABET.length;
  if (location + ROT_VALUE >= MAX_ALPHA) {
    location = location + ROT_VALUE - MAX_ALPHA;
  } else {
    location = location + ROT_VALUE;
  }
  return location;
}

export { rot13, _locationInAlphabet, _isInAlphabet };
