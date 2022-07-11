// Using the map, write a function to clone an array

let arr = [1, 2, 3, 4, 5];

let copyOfArr = arr.map((val) => val);

arr.push(6);

console.log(arr);
console.log(copyOfArr);
