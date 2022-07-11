// Using the filter, write a JavaScript function to clone an array

let arr = [1, 2, 3, 4, 5];

let newArr = arr.filter((val) => val);

arr.push(6);

console.log(arr);
console.log(newArr);
