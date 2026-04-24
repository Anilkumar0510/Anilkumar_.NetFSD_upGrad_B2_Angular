import { Student } from "./student.model.js";

export function getGrade(marks: number): string {
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 50) return "C";
  return "Fail";
}

export function getTopper(students: Student[]): Student {
  return students.reduce((top, student) =>
    student.marks > top.marks ? student : top
  );
}