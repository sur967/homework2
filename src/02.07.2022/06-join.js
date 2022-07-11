let arr = [1, 2, 3, 4, 5];

Array.prototype.myJoin = function (val) {
  return this.reduce((result, item) => {
    result += `${val}${item}`;
    return result;
  });
};

console.log(arr.myJoin(""));
