/*Using slice, Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array  */

function getLastElements(arr, n) {
  if (n === undefined) {
    return +arr.slice(arr.length - 1);
  } else {
    return arr.slice(arr.length - n);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getLastElements(arr, 5));
