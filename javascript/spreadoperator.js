const sumof = function (num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
};

let arrNum = new Array(10, 20, 30, 40);

let sum = sumof(...arrNum);

console.log(sum);

console.log(arrNum);
console.log(...arrNum);

let [n1, n2, , n4, n5] = [...arrNum];

console.log("Numbers are : ", n1, n2, n4, n5);

let newArray = [1, 2, ...arrNum, 5, 6];
console.log(newArray);
