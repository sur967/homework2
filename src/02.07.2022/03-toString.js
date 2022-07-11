/* Create a custom Array.prototype.myToString it should work similarly to Array.prototype.toString */

Array.prototype.myToString = function () {
  if (Array.isArray(this)) {
    return this.reduce((result, item) => {
      result += "," + item;
      return result;
    });
  }
};

let arr = [1, 2, 3, 4, 234];

console.log(arr.myToString());
