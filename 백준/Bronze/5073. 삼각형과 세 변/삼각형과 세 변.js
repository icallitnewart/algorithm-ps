const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const checkTriangle = (numbers) => {
  const [a, b, c] = numbers.sort((a, b) => b - a);

  if (a >= b + c) console.log('Invalid');
  else {
    if (numbers.every(n => n === a)) return console.log('Equilateral');
    if (a === b || a === c || b === c) console.log('Isosceles');
    else console.log('Scalene');
  }
};

for (let i = 0; i < input.length - 1; i++) {
  const numbers = input[i].split(' ').map(Number);
  checkTriangle(numbers);
}