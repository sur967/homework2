/* Using slice, Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array  */

function getFirstElements(arr, n) {
  if (n === undefined) {
    return +arr.slice(0, 1);
  } else {
    return arr.slice(0, n);
  }
}

let arr = [10, 2, 3, 4, 5, 5, 7, 8, 3, 7, 9, 5];

console.log(getFirstElements(arr, 3));
