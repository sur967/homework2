/*  Create a custom Array.prototype.myFilter should work similarly to Array.prototype.filter */

Array.prototype.myFilter = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = arr.myFilter((num) => {
  return num > 5;
});

console.log(newArr);
