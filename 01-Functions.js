// 33 42 29

let number = [33, 42, 29];

for (let num of number) CheckIfPrimeAndPrint(num);

function PrintPrimeDetails(num, isPrime) {
  if (isPrime) {
    console.log("Number " + num + " is Prime");
  } else {
    console.log("Number " + num + " is not Prime");
  }
}

function CheckIfPrimeAndPrint(num) {
  let isP = ChkIfPrime(num); // Call function ChkIfPrime with an argument value 33
  PrintPrimeDetails(num, isP);
}

// Function Declaration
function ChkIfPrime(num) {
  // Parameters
  let isPrime = true;

  for (let divisor = 2; divisor < num; divisor++) {
    if (num % divisor == 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime; // return value
}
