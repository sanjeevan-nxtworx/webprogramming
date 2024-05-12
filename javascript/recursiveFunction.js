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

//let fval = factorial(7);
//console.log(fval);

function powerof(num, times) {
  if (times <= 1) {
    return num;
  }
  return num * powerof(num, times - 1);
}

console.log(powerof(5, 3));
