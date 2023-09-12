const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);
let answer = 665;

for (let i = 0; i < N; i++) {
  while (true) {
    answer++;
    if (answer.toString().includes('666')) break;
  }
}
console.log(answer);