let arr = [10, 20, 30, 40];
let [no1, , no3] = arr;

// let no1 = arr[0];
// let no2 = arr[1];
// let no3 = arr[2];
// let no4 = arr[3];

console.log(arr, no1, no3);

let objVar = {
  Name: "Rajesh",
  Age: 24,
};

let { Name: nm, Age: ag } = objVar;
console.log(objVar, nm, ag);

let { Name: n1, Age: a1 } = { ...objVar };
console.log(n1, a1);
