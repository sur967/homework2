function isPalindrom(str) {
  let arrOfString = [];
  let reversedArrOfString = [];
  for (let i = 0; i < str.length; i++) {
    arrOfString.push(str[i]);
  }
  let copy = [...arrOfString];
  while (copy[0] !== undefined) {
    reversedArrOfString.push(copy.pop());
  }
  if (arrOfString.join("") === reversedArrOfString.join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrom("AAAA"));
