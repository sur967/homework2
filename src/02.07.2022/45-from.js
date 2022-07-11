/* Using from, and Set create a function that is removing duplicates from an array
 */

let arr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9];

function removeDublicates(arr) {
  return [...new Set(Array.from(arr))];
}

let newArr = removeDublicates(arr);

console.log(newArr);
