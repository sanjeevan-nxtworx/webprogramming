function isPrime(number) {
  let div = 2;
  let flag = true;
  while (div <= number / 2) {
    if (number % div === 0) {
      flag = false;
      break;
    }
    div++;
  }
  return flag;
}

function isPrimePredicate(num) {
  return !isPrime(num);
}

let arrNum = new Array(4, 7, 12, 15, 21);
let flg = arrNum.every((num) => !isPrime(num));

// let flg = true;
// for (let idx = 0; idx < arrNum.length; idx++) {
//   if (isPrime(arrNum[idx])) {
//     flg = false;
//     break;
//   }
// }

console.log("All elements are not prime is ", flg);
