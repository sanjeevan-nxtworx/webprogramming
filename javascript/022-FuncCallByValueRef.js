function sum(num1, num2) {
  num1 = num1 + num2;
  return num1;
}

function sumArr(valArr) {
  let sumVal = 0;
  for (let val of valArr) sumVal = sum(sum, val);

  for (let i = 0; i < valArr.length; i++) valArr[-1] = 5;
  //valArr = valArr.map((num) => num + 5);
  return sum;
}

let n1, n2;

n1 = 25;
n2 = 30;

let res = sum(n1, n2);
console.log(n1, n2, res);

let nArr = new Array(10, 20, 30, 40, 50);

res = sumArr(nArr);
console.log(nArr, res);
