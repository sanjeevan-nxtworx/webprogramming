// sum of all numbers from 1 to 100 that are divisble by 5 or 7
let idx = 1;
sum = 0;
for (idx = 1; idx <= 100; idx++) {
  if (idx % 5 !== 0 && idx % 7 !== 0) {
    continue;
  }
  sum += idx;
}

console.log("Sum = ", sum);
console.log("** END **");
