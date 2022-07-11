/*  Create a custom Array.prototype.myShift should work similarly to Array.prototype.shift
 */

Array.prototype.myShift = function () {
  let item;
  for (let i = 0; i < this.length; i++) {
    if (item === undefined) {
      item = this[i];
    }
    this[i] = this[i + 1];
  }
  this.length = this.length - 1;
  return item;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.myShift());
console.log(arr);
