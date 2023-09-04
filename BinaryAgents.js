// Binary Agents
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

const binaryLookup = {
  "01001001": "I",
  "00100000": " ",
  "01101100": "l",
  "01101111": "o",
  "01110110": "v",
  "01100101": "e",
  "01000110": "F",
  "01110010": "r",
  "01000011": "C",
  "01101111": "o",
  "01100100": "d",
  "01100001": "a",
  "01101101": "m",
  "01110000": "p",
  "00100001": "!",
  "01000001": "A",
  "01110010": "r",
  "01100101": "e",
  "01101110": "n",
  "00100111": "'",
  "01110100": "t",
  "00100000": " ",
  "01100010": "b",
  "01101111": "o",
  "01101110": "n",
  "01100110": "f",
  "01101001": "i",
  "01110010": "r",
  "01100101": "e",
  "01110011": "s",
  "00100000": " ",
  "01100110": "f",
  "01110101": "u",
  "01101110": "n",
  "00100001": "!",
  "00111111": "?",
};

function binaryAgent(str) {
  let strArr = str.split(" ");
  let newArr = [];

  for (const element of strArr) {
    let newE = binaryLookup[element];
    newArr.push(newE);
  }

  return newArr.join("");
}

module.exports = {
  binaryAgent,
  binaryLookup,
};
