const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

for (let i = Math.floor(N / 5); i >= 0; i--) {
  const rest = N - 5 * i;
  if (rest % 3 === 0) return console.log(i + rest / 3);
}

console.log(-1);