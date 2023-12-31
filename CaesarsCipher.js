// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
// In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation),
// but do pass them on.

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ROTATE_VALUE = 13;

/**
 * takes a ROT13 encoded string as input and returns a decoded string.
 * @param {String} str - a ROT13 encoded string string to be decoded
 * @returns {String} a decoded string
 */
export default function rot13(str) {
  return str
    .toUpperCase()
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
 * @param {String} element - a character to rotate
 * @returns {String} new rotated element
 */
function _rotateElement(element) {
  let location = _locationInAlphabet(element);
  let newLocation = _newRotaedLocation(location);
  return ALPHABET[newLocation];
}

/**
 * where from A to Z is the character located with A being 0 and Z begining 25 (25-1)
 * @param {String} character  - a single uppercase character
 * @returns {Number} location in ALPHABET string from 0 to length - 1; -1 if not in string
 */
function _locationInAlphabet(character) {
  return ALPHABET.indexOf(character);
}

/**
 * is the character in the Alphabet
 * @param {String} character  - a single uppercase character
 * @returns {Boolean} true if location in Alphabet is greater than or equal to 0
 */
function _isInAlphabet(character) {
  return _locationInAlphabet(character) >= 0;
}

/**
 * if Rotoation would bring it past the end of the Alphabet
 * then start at the beging of the Alphabet
 * otherwise shift the location by ROTATE_VALUE
 * @param {Number} location - a location to be ROT13 adjuested
 * @returns {Number} a new single character value location
 */
function _newRotaedLocation(location) {
  return _isNewRotatedLocationPastTheAlphabet(location)
    ? location + ROTATE_VALUE - ALPHABET.length
    : location + ROTATE_VALUE;
}

function _isNewRotatedLocationPastTheAlphabet(location) {
  return location + ROTATE_VALUE >= ALPHABET.length;
}

export { _locationInAlphabet, _isInAlphabet, _newRotaedLocation };
