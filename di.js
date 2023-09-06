// Drop it
// Given the array arr, iterate through and remove each element starting from the first element
// (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise,
// arr should be returned as an empty array.

function dropElements(arr, func) {
  let len = arr.length;
  let pos = 0;
  let satisfied = false;
  for (let i = 0; i < len; i++) {
    pos = i;
    let element = arr[i];
    let result = func(element);
    if (result) {
      satisfied = true;
      break;
    }
  }
  let newArr = [];

  return satisfied ? arr.slice(pos) : [];
}

module.exports = {
  dropElements,
};
