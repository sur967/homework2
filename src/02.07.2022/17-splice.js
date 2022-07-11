/* Using the splice method, write a function that will fill the missing numbers of a sorted array of numbers, to make it consecutive. 
Example: [1,2,3,6] should become [1,2,3,4,5,6] */

function getSortedArr(arr) {
  let val = arr[arr.length - 1];
  let args = [];

  for (let i = 1; i <= val; i++) {
    if (!arr.includes(i)) {
      args.push(i);
    }
  }

  arr.splice(3, 0, ...args);
  return arr;
}

console.log(getSortedArr([1, 2, 3, 6]));
