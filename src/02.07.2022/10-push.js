/* Create a function that is receiving a number and returns an array which is containing all even digits. Use push method  */

function getEvenNumbers(num) {
  let result = [];
  let numbers = "" + num;
  let numbersArr = numbers.split("");
  for (let number of numbersArr) {
    if (number % 2 === 0) {
      result.push(Number(number));
    }
  }
  return result;
}

console.log(getEvenNumbers(123456789));
