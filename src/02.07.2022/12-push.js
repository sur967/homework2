/* Create a custom Array.prototype.myPush should work similarly to Array.prototype.push */

Array.prototype.myPush = function (...args) {
  for (let arg of args) {
    this[this.length] = arg;
  }
  return this.length;
};

let arr = [1, 2, 3, 4];
arr.myPush(5);
console.log(arr);
