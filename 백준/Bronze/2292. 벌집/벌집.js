const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let round = 0;
let answer = 0;

for (let i = 2; i <= input; i += 6 * round) {
  round++;
  answer++;
}

console.log((input === 1) ? answer : answer + 1);