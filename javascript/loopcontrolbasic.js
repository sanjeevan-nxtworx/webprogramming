let num = 1;
while (num < 100) {
  console.log(num);
  if (num === 39) {
    num++;
    continue;
  }
  if (num % 39 === 0) {
    break;
  }
  num++;
}
console.log("** END **");
