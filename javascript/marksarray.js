// If marks in any subject is < 4 then grade = F
// if avg marks < 4 then grade = F
// avg marks >= 4 & <= 6 grade = D
// avg marks >= 7 & <= 9 grade = C
// avg marks >= 10 & <= 12 grade = B
// avg marks > 12 grade = A

var marks = [10, 12, 15, 8];

let grade = "";
let sum = 0;
for (let idx = 0; idx < marks.length; idx++) {
  sum += marks[idx];
  if (marks[idx] < 4) {
    grade = "F";
    break;
  }
}

if (grade !== "F") {
  avg = sum / marks.length;
  console.log(avg);
  if (avg < 4) grade = "F";
  else if (avg < 7) grade = "D";
  else if (avg < 10) grade = "C";
  else if (avg < 13) grade = "B";
  else grade = "A";
}
console.log("Grade is ", grade);
