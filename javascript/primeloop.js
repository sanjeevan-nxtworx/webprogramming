// Display if a number is prime or not

let num = 101;
let idx;
let flg = true;

for (idx = 2; idx < num / 2; idx++) {
  if (num % idx === 0) {
    flg = false;
    break;
  }
}

if (flg) {
  console.log("The number ", num, " is Prime");
} else {
  console.log("The number ", num, " is NOT prime");
}

num = 102;

for (idx = 2; idx < num / 2; idx++) {
  if (num % idx === 0) {
    flg = false;
    break;
  }
}

if (flg) {
  console.log("The number ", num, " is Prime");
} else {
  console.log("The number ", num, " is NOT prime");
}
