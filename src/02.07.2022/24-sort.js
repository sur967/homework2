// Using sort, Write a JavaScript function to get the max element of an array of numbers

let arr = [1, 3, 5, 2, 42, 554, 10, 4, 8, 9000, 7];

function findMaxElem(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

console.log(findMaxElem(arr));
