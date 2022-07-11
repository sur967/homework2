/* Create a custom Array.prototype.mySplice should work similarly to Array.prototype.splice */

Array.prototype.mySplice = function (start, deleteCount, ...items) {
  if (deleteCount === undefined && start >= 0) {
    this.length = start;
  } else if (deleteCount === undefined && start === undefined) {
    this.length = this.length;
  } else if (start < 0) {
    this.length = this.length + start;
  } else if (start === 0 && deleteCount > 0) {
    for (let i = start; i < this.length; i++) {
      this[i] = this[i + 1];
    }
  }
};

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 5, 6];

arr1.mySplice(3);
arr2.splice(3);
console.log(arr1);
console.log(arr2);
