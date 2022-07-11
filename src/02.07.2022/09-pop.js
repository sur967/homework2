/* Create a custom Array.prototype.myPop should work similarly to Array.prototype.pop */
Array.prototype.myPop = function () {
  let elem = this[this.length - 1];
  this.length = this.length - 1;
  return elem;
};

let arr = [1, 2, 3, 4, 5];
let x = arr.myPop();

console.log(arr, x);
