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

function evenlyDivisible(operand1, operand2) {
  return operand1 % operand2 == 0;
}

function smallestCommons(arr) {
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
  //  console.log(rangeArr, start, end, upperBound);

  let result = 0;

  for (let num = start; num <= upperBound; num++) {
    let rangeResult = false;
    for (const element of rangeArr) {
      //  console.log(
      //    'num=', num,
      //    'dived by e=',element,
      //     evenlyDivisible(num, element));

      if (!evenlyDivisible(num, element)) {
        rangeResult = false;
        break;
      } else {
        rangeResult = true;
      }
    }
    // console.log(' after testing ', num,
    // ' resulr is ', rangeResult)
    result = num;
    if (rangeResult) {
      break;
    }
  }

  return result;
}

//console.log(evenlyDivisible(60, 4))
//console.log(smallestCommons([5,1]));

//console.log(smallestCommons([1, 13]) )

//console.log(evenlyDivisible(60, 4))
// console.log(smallestCommons([1, 5])); //60
//console.log(smallestCommons([5, 1])); //60
//console.log(smallestCommons([2, 10])); // should return 2520.//
//console.log(smallestCommons([1, 13])); // should return 360360.
console.log(smallestCommons([23, 18])); // should return 6056820.
