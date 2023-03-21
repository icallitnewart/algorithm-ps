const attendees = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const students = Array.from(Array(31).keys()).slice(1);
const answer = students.filter(student => !attendees.includes(student));
console.log(answer.join('\n'));