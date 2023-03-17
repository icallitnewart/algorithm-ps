const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const numbers = input.map(n => n.replace('\r', '').split(' '));

numbers.forEach((set, i) => {
  if (i === numbers.length - 1) return;
  const [num1, num2] = set.map(n => Number(n));
  console.log(num1 + num2);
});