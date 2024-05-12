// function function-name (parameter-list)
// {
//    statements
//    return data;
//}

// function definition
function isPrime(number) {
  let div = 2;
  let flag = true;
  while (div < number / 2) {
    if (number % div === 0) {
      flag = false;
      break;
    }
    div++;
  }
  return flag;
}

let num = 11;
let isP = isPrime(num); // call function with arguments
console.log(isP);
