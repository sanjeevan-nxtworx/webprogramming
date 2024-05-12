// Write a program where
// initialize Basic Salary and Grade
// Calculate HRA, DA & TA as per the following table
//  Grade   HRA %    DA%   TA%
//   A      10%      15%    5%
//   B      12%      17%    7%
//   C      14%      18%    9%
//   D      18%      10%    10%
// Calculate Gross
// Display Basic, HRA, DA, TA and Gross
// if For Grade A - HRA > 5000 then HRA = 5000, DA = 5000, TA = 2500
// if For Grade B- HRA > 6000 then HRA = 6000, DA = 5000, TA = 3500

let basicSalary = 25000.0;
let grade = "A";

let hra, da, ta, gross;
hra = da = ta = gross = 0;

if (grade === "A") {
  hra = 0.1 * basicSalary;
  da = 0.15 * basicSalary;
  ta = 0.05 * basicSalary;
  if (hra > 5000) {
    hra = 5000;
    da = 5000;
    ta = 2500;
  }
} else if (grade === "B") {
  hra = 0.12 * basicSalary;
  da = 0.17 * basicSalary;
  ta = 0.07 * basicSalary;
  if (hra > 6000) {
    hra = 6000;
    da = 6000;
    ta = 3500;
  }
} else if (grade === "C") {
  hra = 0.14 * basicSalary;
  da = 0.18 * basicSalary;
  ta = 0.09 * basicSalary;
} else if (grade === "D") {
  hra = 0.18 * basicSalary;
  da = 0.2 * basicSalary;
  ta = 0.1 * basicSalary;
} else {
  console.log("GRADE IS WRONG");
}

gross = basicSalary + hra + da + ta;
console.log(gross, ", ", basicSalary + ", ", hra + ", " + da + ", " + ta);
