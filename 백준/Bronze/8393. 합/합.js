const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const num = parseInt(input);
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log(sum);