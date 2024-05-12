let arrValue = new Array("Dog", "Cat");

let arrCats = new Array("Lion", "Tiger", "Leopard");
let arrMammals = new Array("Elephant", "Monkey");

let arrNewArr = arrValue.concat(arrCats, arrMammals);

console.log(arrNewArr, arrNewArr.length);

let nameVal = "";
for (let name of arrNewArr) {
  if (name.length > nameVal.length) {
    nameVal = name;
  }
}

console.log("The animal with the largest name is : ", nameVal);
