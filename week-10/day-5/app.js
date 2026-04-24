import { getGrade, getTopper } from "./student.service.js";
import { formatName, calculateAverage } from "./utils.js";
import { PASS_MARKS } from "./constants.js";
const students = [
    { id: 1, name: "jahnavi", marks: 95 },
    { id: 2, name: "ravi", marks: 80 },
    { id: 3, name: "sita", marks: 60 }
];
students.forEach(student => {
    console.log("Name:", formatName(student.name));
    console.log("Marks:", student.marks);
    console.log("Grade:", getGrade(student.marks));
    console.log("Pass Marks:", PASS_MARKS);
});
console.log("Average:", calculateAverage(students));
console.log("Topper:", getTopper(students));
