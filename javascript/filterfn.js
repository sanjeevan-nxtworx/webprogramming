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

let arrNum = new Array(4, 7, 12, 19, 21);
let arrPrime = arrNum.filter((num) => isPrime(num));

console.log("Array of Primes is ", arrPrime);
