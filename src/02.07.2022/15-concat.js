/* Using concat compute the union of two arrays 
and then remove all duplicated items if they exist */

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];
let newArr = [...new Set(arr1.concat(arr2))];
console.log(newArr);
