// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let newArr = [];
  // if (!Array.isArray(arr)) {
  //   return arr;
  // }
  let len = arr.length;
  console.log("arr=", arr, "is arr", Array.isArray(arr), "len=", len);
  // console.log("arr=", arr, "len", len);
  for (let i = 0; i < len; i++) {
    let element = arr[i];
    console.log("element", element, "isArr", Array.isArray(element));
    if (Array.isArray(element)) {
      let tmpArr = steamrollArray(element);
      console.log("tmp", tmpArr, 'before concat', newArr, Array.isArray(tmpArr));
      newArr = newArr.concat(tmpArr);
      console.log("tmp", tmpArr, "after concat", newArr);
    } else {
      console.log("newArr", newArr, "element to add", element);
      newArr.push(element);
      console.log("newArr after push", newArr, "element to add", element);
    }
  }
  console.log("new", newArr);
  return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
//console.log(steamrollArray([1]));

//console.log(steamrollArray([1, 2, 3, [9]]));
