let num = 44;

let div;
let flg = true;

while (div < num / 2) {
  if (num % div == 0) {
    flg = false;
    break;
  }
  div++;
}

if (flg) console.log("Number ", num, " is Prime");
else console.log("Number ", num, " is not a Prime");
