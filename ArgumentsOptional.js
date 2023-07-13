// Arguments Optional

// Create a function that sums two arguments together. If only one argument is provided,
// then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function isNumber(arg) {
  return typeof arg === "number" ? true : false;
}

function addTogether() {
  const [arg1, arg2] = arguments;

  if (isNumber(arg1)) {
    if (isNumber(arg2)) return arg1 + arg2;
    if (arguments.length === 1) return (arg2) => addTogether(arg1, arg2);
  }
}

// console.log(34, isNumber(34)) //return true
// console.log("string 34", isNumber("34")) //return false
// console.log("array", isNumber([34, 2])) //return false

console.log(addTogether(2, 3), "1 should return 5");
console.log(addTogether(23, 30), "2 should return 53.");
console.log(addTogether("2", 3), "3 should return undefined.");
console.log(addTogether(5, undefined), "4 should return undefined.");
console.log(
  addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
  "5 should return undefined."
);
console.log(addTogether(5), "6 should return a function.");
console.log(addTogether(5)(7), "7 should return 12.");
console.log(addTogether(2)([3]), "8 should return undefined.");
console.log(addTogether(2, "3"), "9 should return undefined.");
