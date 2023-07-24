const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const grades = ['A+', 'A0', 'B+', 'B0', 'C+', 'C0', 'D+', 'D0', 'F'].reverse();
let totalCredits = 0;

const sum = input.reduce((acc, cur) => {
  const [_, credit, grade] = cur.split(' ');
  const gradeIdx = grades.indexOf(grade.trim());
  const score = gradeIdx > 0 ? (gradeIdx + 1) * 0.5 : 0;
  if (grade.trim() !== 'P') totalCredits += +credit;
  return acc + credit * score;
}, 0);

console.log(sum / totalCredits);