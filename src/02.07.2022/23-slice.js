/*  Create a custom Array.prototype.mySlice should work 
   similarly to Array.prototype.slice */

Array.prototype.mySlice = function (begin, end) {
  let result = [];

  if (begin < 0) {
    for (let i = this.length + begin; i < this.length; i++) {
      result.push(this[i]);
    }
  } else if (begin > 0 && end < 0) {
    for (let j = begin; j < this.length + end; j++) {
      result.push(this[j]);
    }
  } else if (begin > 0 && end > 0) {
    for (let l = begin; l < end; l++) {
      result.push(this[l]);
    }
  } else if (begin >= 0 && end === undefined) {
    for (let k = begin; k < this.length; k++) {
      result.push(this[k]);
    }
  } else if (begin === undefined && end === undefined) {
    for (let w = 0; w < this.length; w++) {
      result.push(this[w]);
    }
  }

  return result;
};

let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.mySlice());
console.log(arr.slice());
