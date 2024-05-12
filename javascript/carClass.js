class RentalCar {
  constructor(reg, make, color, type, status = "Parked", location = "Mumbai") {
    this.carRegNum = reg;
    this.carMake = make;
    this.carColor = color;
    this.carType = type;
    this.carStatus = status;
    this.carLocation = location;
  }

  displayCar() {
    console.log(this.carRegNum, this.carMake);
  }
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

console.log(carOne);
console.log(carTwo);

console.log(RentalCar.prototype);
console.log(carOne.__proto__);
console.log(carTwo.__proto__);

carOne.displayCar();
carTwo.displayCar();
