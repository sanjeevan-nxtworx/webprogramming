let arrString = new Array("Nathan", "Manisha", "Hrishi", "Kavita");
arrString.forEach((val) => console.log(val));

let numArr = new Array(5, 7, 3, 4, 11, 2);

let newArr = numArr.map((val) => val + 100);
console.log(numArr);
console.log(newArr);

let flg = numArr.every((val) => (val % 2 === 0 ? true : false));
if (flg) console.log("All Elements are even");
else console.log("All Elements are not Even");

let filterArr = numArr.filter((val) => val % 6 === 0);

console.log("Filtered Data: ", filterArr);

let sortArr = numArr.sort((num1, num2) => num2 - num1);
console.log(sortArr);
console.log(numArr);

let result = arrString.reduce(
  (acc, val) => acc + val,
  "This is the concat value: "
);
console.log(result);

for (let val of arrString) console.log(val);
