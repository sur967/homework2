/* Using from, write a JavaScript function to clone an array */

let arr = [1, 2, 3, 4, 5];

function getCloneArr(arr) {
  return Array.from(arr);
}

let newArr = getCloneArr(arr);
arr.push(100);
console.log(arr);
console.log(newArr);
