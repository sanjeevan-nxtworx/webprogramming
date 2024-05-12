class Student {
  static numStudents = 0;
  constructor(name, age = 0) {
    this.name = name;
    this.age = age;
    this.avgMarks = 0.0;
    Student.numStudents++;
  }

  static ShowNumberOfStudents() {
    return Student.numStudents;
  }

  displayAge() {
    console.log(this.age);
  }

  displayName() {
    console.log(this.name);
  }
}

class PrimaryStudent extends Student {
  constructor(name, age = 0, rollNo) {
    super(name, age);
    this.rollNo = rollNo;
  }
}

let pStudent = new PrimaryStudent("Natasha", 10, 102);
const icons = "☃★♲";
console.log(icons.charCodeAt(1));
console.log(icons.codePointAt(1));
// pStudent.displayAge();
// pStudent.displayName();
