function isPrime(num) {
  let div = 2;
  while (div < num) {
    let rem = num % div;
    if (rem === 0) return false;
    div++;
  }
  return true;
}

let num = 2;
let valStart = Date.now();

while (num <= 20) {
  let prime = isPrime(num);
  if (prime) console.log(num, " is prime");
  num++;
}

let valEnd = Date.now();

console.log(
  `Time Taken for Execution is ${valStart} ${valEnd} ${valEnd - valStart}`
);

console.log("** END **");
