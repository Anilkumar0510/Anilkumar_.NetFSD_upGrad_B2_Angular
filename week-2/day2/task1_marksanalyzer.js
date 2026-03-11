const marks = [78, 85, 67, 90, 88];
marks.map((mark, index) => {
    console.log(`Subject ${index + 1}: ${mark} marks`);
});

const totalMarks = marks.reduce((total, mark) => total + mark, 0);
const calculateAverage = (total, count) => total / count;

const averageMarks = calculateAverage(totalMarks, marks.length);
const result = averageMarks >= 40 ? "PASS" : "FAIL";

console.log(`\nTotal Marks: ${totalMarks}`);
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
console.log(`Result: ${result}`);