/* Create a custom Array.prototype.myUnshift should work similarly to Array.prototype.unshift
 */

Array.prototype.myUnshift = function (...args) {
  let result = [];
  for (let arg of args) {
    result.push(arg);
  }
  for (let i = 0; i < this.length; i++) {
    result.push(this[i]);
  }
  for (let j = 0; j < result.length; j++) {
    this[j] = result[j];
  }
};

let arr = [4, 5, 6];
arr.myUnshift(1, 2, 3);
console.log(arr);
