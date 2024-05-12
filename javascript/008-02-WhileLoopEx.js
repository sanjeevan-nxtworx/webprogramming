// Prime Number

let num = 23;
let flg = true;

for (let div = 2; div < num; div++) {
  if (num % div === 0) {
    flg = false;
    break;
  }
}

if (!flg) console.log("Number is not a Prime");
else console.log("Number is a Prime");

console.log("End");
