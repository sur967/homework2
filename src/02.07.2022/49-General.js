/* Write a function to find the difference of two arrays  */

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [4, 5, 6, 7, 8, 9];

function findDifference(arr1, arr2) {
  let result1 = arr1.filter((elem) => {
    return !arr2.includes(elem);
  });

  let result2 = arr2.filter((elem) => {
    return !arr1.includes(elem);
  });

  return [...result1, ...result2];
}

console.log(findDifference(arr1, arr2));
