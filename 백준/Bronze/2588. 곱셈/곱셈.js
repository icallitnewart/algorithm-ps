const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [num1, num2] = input;
const multiply = (a, b) => parseInt(a) * parseInt(b);
let sum = 0;

for (let i = 0; i < num2.length; i++) {
  const answer = multiply(num1, num2[num2.length - 1 - i]);
  console.log(answer);
  sum += answer * 10 ** i;
}
console.log(sum);