function RentalCar(
  reg,
  make,
  color,
  type,
  status = "Parked",
  location = "Mumbai"
) {
  this.carRegNum = reg;
  this.carMake = make;
  this.carColor = color;
  this.carType = type;
  this.carStatus = status;
  this.carLocation = location;
}

let carOne = new RentalCar(
  "MH02-1648",
  "Maruti",
  "red",
  "Compact",
  "Rented",
  "Mumbai"
);
let carTwo = new RentalCar("MH03-2550", "Kia", "blue", "SUV");
RentalCar.prototype.carMileage = 10000;
RentalCar.prototype.displayCar = function () {
  console.log(this.carRegNum, this.carMake, this.carStatus);
};

carOne.carMileage;
let a = carOne.carHoliday;
console.log(a);
carTwo.displayCar();

console.log(RentalCar.prototype);
console.log(carOne.__proto__);
console.log(carTwo.__proto__);
