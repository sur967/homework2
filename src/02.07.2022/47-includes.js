/* Create a custom Array.prototype.myIncludes should work similarly to Array.prototype.includes    */

Array.prototype.myIncludes = function (elem, fromIndex) {
  if (fromIndex === undefined) {
    for (let i = 0; i < this.length; i++) {
      if (elem === this[i]) {
        return true;
      } else {
        return false;
      }
    }
  } else if (fromIndex < 0) {
    for (let j = this.length + fromIndex; j < this.length; j++) {
      if (elem === this[j]) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    for (let l = fromIndex; l < this.length; l++) {
      if (elem === this[l]) {
        return true;
      } else {
        return false;
      }
    }
  }
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.includes(5));
