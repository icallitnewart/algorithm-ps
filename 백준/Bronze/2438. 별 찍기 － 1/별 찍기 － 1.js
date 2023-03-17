const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

for (let i = 1; i <= n; i++) {
  let answer = '';
  for (let j = 0; j < i; j++) {
    answer += '*';
  }
  console.log(answer);
}