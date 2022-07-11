/* Create a function that is receiving an array and returns reversed one using pop() */
let arr = [1, 2, 3, 4, 5];

function getReversedArr(arr) {
  let result = [];

  while (arr[0] !== undefined) {
    result.push(arr.pop());
  }

  return result;
}

console.log(getReversedArr(arr));
