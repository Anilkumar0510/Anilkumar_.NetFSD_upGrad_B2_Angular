export function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
export function calculateAverage(students) {
    let total = students.reduce((sum, s) => sum + s.marks, 0);
    return total / students.length;
}
