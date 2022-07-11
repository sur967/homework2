//Create a custom Array.prototype.myConcat should work similarly to Array.prototype.concat

Array.prototype.myConcat = function (...args) {
  let result = [];
  for (let arg of args) {
    if (Array.isArray(arg)) {
      result.push(...arg);
    } else {
      result.push(arg);
    }
  }
  return [...this, ...result];
};

let arr1 = [1, 2, 3];
let arr2 = [4, [1, 2, 3], 6];
let arr3 = arr1.myConcat(arr2, 2, 3);
console.log(arr3);
