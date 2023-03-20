const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [len, numbers, v] = input;

const answer = numbers
  .split(' ')
  .filter((num) => Number(num) === Number(v))
  .length;
console.log(answer);