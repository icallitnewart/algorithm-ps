const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

for (let i = 1; i <= n; i++) {
  let answer = '';
  for (let j = 0; j < n - i; j++) answer += ' ';
  for (let k = 0; k < i; k++) answer += '*';

  console.log(answer);
}