function Student(name, age) {
  this.name = name;
  this.age = age;
}

let aditya = new Student("Aditya", 24);

Student.prototype.rollNo = 5;
Student.prototype.average = 10;
Student.prototype.displayName = function () {
  console.log("Name: ", this.name);
};

console.log(Student.prototype);
console.log(aditya.__proto__);
aditya.__proto__.school = "Kids Klub";
console.log(aditya.school);
