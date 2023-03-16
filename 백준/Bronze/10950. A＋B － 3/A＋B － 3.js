const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const numbers = input.map(n => n.replace('\r', '').split(' '));
const count = numbers[0];

for (let i = 1; i <= count; i++) {
  const firstN = parseInt(numbers[i][0]);
  const secondN = parseInt(numbers[i][1]);
  console.log(firstN + secondN);
}