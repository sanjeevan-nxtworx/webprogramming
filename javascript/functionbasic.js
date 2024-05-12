const isPrime = (no) => {
  // no is a function parameter
  let divisor = 2;
  let isprime = true;
  while (divisor < no / 2) {
    if (no % divisor === 0) {
      isprime = false;
      break;
    }
    divisor++;
  }
  return isprime;
};

const isOdd = (no) => {
  if (no % 2 === 0) return false;
  return true;
};

function printIfPrime(primeflg, no) {
  if (!primeflg) console.log(no, " Is not a Prime Number");
  else console.log(no, " Is a Prime Number");
}

const printNumIfPrime = (no) => {
  if (isPrime(no)) console.log(no, " Is not a Prime Number");
  else console.log(no, " Is a Prime Number");
};

const printOperation = (no, func) => {
  if (func(no)) console.log(no, " Is True");
  else console.log(no, " Is False");
};

// 1. start from 2   divisor = 2 until diviser < num
// 2. check if num % divisor gives a zero remainder, if yes, not prime
// 3. increment divisor. Goto 1
let num = 19;
//let flg = false;
//flg = isPrime(num); // Passing num as an argument
//printIfPrime(flg, num);
//printNumIfPrime(num);
printOperation(num, isPrime);
printOperation(num, isOdd);
num = 27;
//printNumIfPrime(num);
printOperation(num, isPrime);
printOperation(num, isOdd);
num = 36;
//printNumIfPrime(num);
printOperation(num, isPrime);
printOperation(num, isOdd);
