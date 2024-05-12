function isPrime(num) {
  let div = 2;
  while (div < num) {
    let rem = num % div;
    if (rem === 0) return false;
    div++;
  }
  return true;
}

let sum = 0;

for (let num = 1; num <= 1000; num++) {
  let primeflg = isPrime(num);
  if (!primeflg) continue;
  sum += num;
  console.log(sum + ", " + num);
}

console.log("Sum = " + sum);
console.log("** END OF PROGRAM **");
