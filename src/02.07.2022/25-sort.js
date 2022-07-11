// Using sort, Write a JavaScript function to get the min element of an array of numbers

let arr = [33, 3, 5, 2, 42, 554, 10, 4, 8, 9000, 7];

function findMaxElem(arr) {
  arr.sort((a, b) => a - b);
  return arr[0];
}

console.log(findMaxElem(arr));
