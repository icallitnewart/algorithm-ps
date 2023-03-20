const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, X] = input[0].split(' ');
const numbers = input[1].split(' ');
let answer = [];

for (let i = 0; i < Number(N); i++) {
  const number = Number(numbers[i]);
  if (number < Number(X)) answer.push(number);
}
console.log(answer.join(' '));