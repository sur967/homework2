/*Using slice, write a JavaScript function to clone an array */

function getCloneArr(arr) {
  return arr.slice();
}

let arr = [1, 2, 3, 4, 5];
let newArr = getCloneArr(arr);
arr.push(10);
console.log(arr);
console.log(newArr);
