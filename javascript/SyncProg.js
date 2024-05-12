function factorial(num) {
  console.log("Calling Factorial ", num);
  if (num <= 1) {
    console.log("Returning 1");
    return 1;
  }

  let f = num * factorial(num - 1);
  console.log("Returning ", f);
  return f;
}

function powerof(num, times) {
  if (times <= 1) {
    return num;
  }
  return num * powerof(num, times - 1);
}

console.log(powerof(5, 3));
console.log(factorial(5));
setTimeout(() => {
  console.log("Hello World");
}, 3000);

console.log("THIS IS THE END");
setTimeout(() => {
  console.log("Hello World2");
}, 2500);
