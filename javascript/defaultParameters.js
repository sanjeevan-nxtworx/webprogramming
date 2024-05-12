function power(base, exponent = 2, radix = 1) {
  console.log(exponent);
  radix++;
  console.log(radix);
  let result = 1;
  for (let count = 0; count < exponent; count++) result *= base;

  return result;
}

let val = power(2, 3);

console.log(val);
