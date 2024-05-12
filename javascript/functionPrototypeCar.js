function Car(name, type, mileage) {
  this.name = name;
  this.type = type;
  this.mileage = mileage;
}

Car.prototype.displayCar = function () {
  console.log(this.name);
  console.log(this.type);
  console.log(this.mileage);
};

let myCar = new Car("Maruti", "Sedan", 200);
let mycar2 = new Car("Honda", "Hatchback", 500);
// myCar.displayCar();
// mycar2.displayCar();

myCar.__proto__.showMileage = function () {
  console.log(this.mileage);
};

myCar.showMileage();
mycar2.showMileage();

let newCar = new Car("Hyundai", "sedan", 300);
console.log(newCar.__proto__);

console.log(newCar.name);
console.log(newCar.mileage);
