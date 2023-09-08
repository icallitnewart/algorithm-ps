const numbers = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const [a, b, c] = numbers;

if (numbers.every(n => n === 60)) return console.log('Equilateral');
if (numbers.reduce((a, c) => a + c, 0) === 180) {
  if (a === b || a === c || b === c) console.log('Isosceles');
  else console.log('Scalene');
} else console.log('Error');