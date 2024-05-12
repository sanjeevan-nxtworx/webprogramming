const prompt = require("prompt-sync")();
let num;

do {
  let strNum = prompt("Input number between 1-20 ");
  num = parseInt(strNum);
} while (num < 1 || num > 20);

console.log("Number inputted is ", num);
