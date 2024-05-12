let student = {
  Name: "Student Name",
  Age: 21,
  Course: "SAP",
  checkAge: function () {
    return this.Age;
  },
};

let name = student["Name"];
console.log(name);

for (let prop in student) console.log(prop, student[prop]);

console.log(student.toString());
