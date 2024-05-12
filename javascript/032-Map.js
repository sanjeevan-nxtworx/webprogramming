class Car {
  constructor(lNo, mileage, mainmileage, datemaint) {
    this.LicenceNumber = lNo;
    this.Mileage = mileage;
    this.MileageAtLastMaintenance = mainmileage;
    this.dateWhenLastMaintained = datemaint;
  }

  displayCar() {
    console.log(
      this.LicenceNumber,
      this.Mileage,
      this.MileageAtLastMaintenance,
      this.dateWhenLastMaintained
    );
  }

  calcKmsSinceMaint() {
    return this.Mileage - this.MileageAtLastMaintenance;
  }

  calcDaysSinceMaint() {
    let today = new Date();
    let daydiff = Math.trunc(
      (today - this.dateWhenLastMaintained) / 1000 / 60 / 60 / 24
    );
    return daydiff;
  }

  displayKmsSinceMaint() {
    console.log(this.calcKmsSinceMaint(), "Kms since Last Maintained");
  }

  displayDaysSinceMaint() {
    console.log(this.calcDaysSinceMaint(), "days since last maintained");
  }

  isMaintenanceDue() {
    let mildiff = this.calcKmsSinceMaint();
    let daydiff = this.calcDaysSinceMaint();

    if (daydiff > 365 || mildiff > 500) return true;
    return false;
  }
}

let myCar = new Car("MH-041231", 2000, 300, new Date(2022, 0, 5));
console.log(myCar);
// console.log(Car);

let cars = new Map([
  ["MH-041231", new Car("MH-041231", 2000, 300, new Date(2022, 0, 5))],
  ["MH-041232", new Car("MH-041232", 6000, 5700, new Date(2023, 1, 2))],
  ["MH-041233", new Car("MH-041233", 2000, 5700, new Date(2023, 2, 2))],
  ["MH-041234", new Car("MH-041234", 1000, 5700, new Date(2023, 3, 2))],
  ["MH-041235", new Car("MH-041235", 14000, 5700, new Date(2023, 4, 2))],
  ["MH-041236", new Car("MH-041236", 23000, 5700, new Date(2023, 5, 2))],
  ["MH-041237", new Car("MH-041237", 32000, 5700, new Date(2023, 6, 2))],
  ["MH-041238", new Car("MH-041238", 63200, 5700, new Date(2023, 7, 2))],
  ["MH-041239", new Car("MH-041239", 6200, 5700, new Date(2023, 8, 2))],
  ["MH-041240", new Car("MH-041240", 63200, 63000, new Date(2023, 7, 2))],
]);

cars.set("MH-041221", new Car("MH-041221", 1000, 600, new Date(2024, 1, 1)));

//cars["MH-041222"] = new Car("MH-041222", 2000, 1600, new Date(2024, 0, 10));
// console.log(cars);
// console.log(cars.size);
// let cnt = 1;
// for (const x of cars.values()) {
//   console.log(cnt, x.LicenceNumber);
//   cnt++;
// }

// cars.delete("MH-041221");
// //cars.clear();
// cars.forEach((car, key) => {
//   console.log(key, car.LicenceNumber);
// });

// if (cars.has("MH-041236xx")) console.log(cars.get("MH-041236"));

// for (let car of cars) {
//   if (car.isMaintenanceDue()) {
//     console.log(car.LicenceNumber, "Maintenance is due");
//   } else {
//     console.log(car.LicenceNumber, "is OK");
//   }
// }

//let val = cars.keys();
