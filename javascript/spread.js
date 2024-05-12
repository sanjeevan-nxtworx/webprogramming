let arrVal = [10, 20, 40, 50, 60, 70];
// let k = 0;
let [n1, n2, ...n3] = arrVal;

console.log(n1, n2, n3);
// let nArr = [1, 2, ...arrVal, 5, 10];
// console.log(nArr);

// function add(n1, n2, n3) {
//   return n1 + n2 + n3;
// }

// //let val = add(...arrVal);
// let val = add(10, 20, 40, 50, 60, 70);
// console.log(val);

// let a = [2, 3, 4];
// let b = [1, ...a, 5];
// console.log(b);

// let [x, y, z, w] = a;
// console.log(x, y, z, w);

// let obj = {
//   name: "My Name",
//   height: 134,
// };

// let { name, age, height } = obj;

// console.log(name, (age = 25), height);

/*
let [m, ...n] = arrVal;
console.log(m, n);

function sumof(no1, no2, no3) {
  return no1 + no2 + no3;
}

let sum = sumof(...arrVal);
console.log(sum);

let student = {
  Name: "Student Name",
  Age: 21,
  Course: "SAP",
  checkAge: function () {
    return this.Age;
  },
};

let { Name: nameVal, Age: ageVal } = student;

console.log(nameVal);
console.log(ageVal);
*/
