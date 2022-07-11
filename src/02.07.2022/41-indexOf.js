//Write a function which is checking if a given element contains inside an array

function foo(elem, arr) {
  if (arr.indexOf(elem) !== -1) {
    return true;
  } else {
    return false;
  }
}

console.log(foo(3, [1, 2, 3, 4, 5, 6, 7]));
