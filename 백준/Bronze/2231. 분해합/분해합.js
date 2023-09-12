const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const num = parseInt(input);
let answer = 0;

for (let i = 1; i <= num; i++) {
  const nums = i.toString().split('');
  if (nums.reduce((a, c) => a + +c, i) === num) {
    answer = i;
    break;
  }
}

console.log(answer);