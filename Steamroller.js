// Steamroller
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
// Flatten a nested array. You must account for varying levels of nesting.

export default function steamrollArray(arr) {
  let newArr = [];
  // if (!Array.isArray(arr)) {
  //   return arr;
  // }
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let element = arr[i];
    if (Array.isArray(element)) {
      let tmpArr = steamrollArray(element);
      newArr = newArr.concat(tmpArr);
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}
