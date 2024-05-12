// function Student() {
//   this.name = "natasha";
//   this.age = 21;
// }

// console.log(Student.prototype);

// let studentObj = new Student();
// let studentB = new Student();

// Student.prototype.marks = [10, 20, 40];
// console.log(Student.prototype);
// console.log(studentObj.__proto__.marks[2]);
// console.log(studentB.__proto__.marks[2]);

// studentObj.__proto__.avgMarks = 10;
// console.log(Student.prototype);
// console.log(studentObj.__proto__);
// console.log(studentB.__proto__);

// studentObj.age = 40;
// studentB.name = "Hrishi";

// console.log(studentObj);
// console.log(studentB);

// student.marks = [10, 20, 30];
// console.log(student);

// Constructor function

function Student(name, age = 0) {
  this.name = name;
  this.age = age;
  this.avgMarks = 0;
}

let student1 = new Student("Natasha", 21);
let student2 = new Student("Kirti");

Student.prototype.marks = [5, 10];

console.log(student1.name);
console.log(student1.marks);
console.log(student1);
console.log(student1.__proto__);
