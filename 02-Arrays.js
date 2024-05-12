let marks = new Array(1);
marks[0] = 55;
marks[1] = 25;
marks[9] = 65;

console.log("Length of Marks Array is ", marks.length);
console.log(marks[50]);

for (let index = 0; index < marks.length; index++) {
  if (marks[index] > 50) {
    console.log("Student " + (index + 1) + " has Passed");
  } else {
    console.log("Student " + (index + 1) + " has Failed");
  }
}
