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

console.log(Car);

let cars = new Array(
  new Car("MH-04 1231", 2000, 300, new Date(2022, 0, 5)),
  new Car("MH04 489382", 6000, 5700, new Date(2023, 1, 2)),
  new Car("MH05 489383", 2000, 5700, new Date(2023, 2, 2)),
  new Car("MH04 489384", 1000, 5700, new Date(2023, 3, 2)),
  new Car("MH04 489385", 14000, 5700, new Date(2023, 4, 2)),
  new Car("MH04 489386", 23000, 5700, new Date(2023, 5, 2)),
  new Car("MH04 489387", 32000, 5700, new Date(2023, 6, 2)),
  new Car("MH04 489388", 63200, 5700, new Date(2023, 7, 2)),
  new Car("MH04 489389", 6200, 5700, new Date(2023, 8, 2)),
  new Car("MH04 489380", 63200, 63000, new Date(2023, 7, 2))
);

for (let car of cars) {
  if (car.isMaintenanceDue()) {
    console.log(car.LicenceNumber, "Maintenance is due");
  } else {
    console.log(car.LicenceNumber, "is OK");
  }
}
