// Using reverse, write a function that checks if the string is a palindrome

function isPalindrom(str) {
  let newString = str.split("").reverse().join("");
  if (str === newString) return true;
  return false;
}

console.log(isPalindrom("aaaa"));
