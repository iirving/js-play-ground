// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also
// evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function range(start, end) {
  const ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
}

export function evenlyDivisible(operand1, operand2) {
  return operand1 % operand2 == 0;
}

export default function smallestCommons(arr) {
  let start = arr[0];
  let end = arr[1];
  [start, end] = arr.sort((a, b) => a - b);

  let rangeArr = range(start, end);

  const numberDivisors = end - start + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = start; i <= end; i++) {
    upperBound *= i;
  }

  let result = 0;

  for (let num = start; num <= upperBound; num++) {
    let rangeResult = false;
    for (const element of rangeArr) {
      if (!evenlyDivisible(num, element)) {
        rangeResult = false;
        break;
      } else {
        rangeResult = true;
      }
    }

    result = num;
    if (rangeResult) {
      break;
    }
  }

  return result;
}
