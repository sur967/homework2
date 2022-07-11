/* Write a function that will receive the length and the value and will return a pre-filled array 
Example: prefillArray(2, ‘Bla Bla`) 
should return [‘Bla Bla`, ‘Bla Bla`] */

function foo(length, value) {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(value);
  }
  return result;
}

console.log(foo(3, "Suren"));
