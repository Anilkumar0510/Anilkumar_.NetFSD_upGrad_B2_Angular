import { Student } from "./student.model.js";
import { getGrade, getTopper } from "./student.service.js";
import { formatName, calculateAverage } from "./utils.js";
import { PASS_MARKS } from "./constants.js";
const students: Student[] = [
  { id: 1, name: "jahnavi", marks: 95 },
  { id: 2, name: "Nihal", marks: 80 },
  { id: 3, name: "Rohan", marks: 60 }
];

students.forEach(student => {
  console.log("Name:", formatName(student.name));
  console.log("Marks:", student.marks);
  console.log("Grade:", getGrade(student.marks));
  console.log("Pass Marks:", PASS_MARKS);
});

console.log("Average:", calculateAverage(students));
console.log("Topper:", getTopper(students));