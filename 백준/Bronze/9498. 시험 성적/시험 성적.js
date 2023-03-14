const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = "";

if (90 <= input && input <= 100) answer = "A";
else if (80 <= input && input < 90) answer = "B";
else if (70 <= input && input < 80) answer = "C";
else if (60 <= input && input < 70) answer = "D";
else answer = "F";

console.log(answer);