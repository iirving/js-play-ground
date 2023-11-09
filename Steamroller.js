// Steamroller
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
// Flatten a nested array. You must account for varying levels of nesting.

export default function steamrollArray(arr) {
  let newArr = [];
  arr.forEach((element) => {
    return Array.isArray(element)
      ? (newArr = newArr.concat(steamrollArray(element)))
      : newArr.push(element);
  });
  return newArr;
}
