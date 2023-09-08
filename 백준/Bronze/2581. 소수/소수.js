let [M, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let sum = 0, min = 0;

if (M === 1) M++;

for (let i = M; i <= N; i++) {
  const divisors = [];

  for (let j = 2; j <= i / 2; j++) {
    if (i % j === 0) divisors.push(j);
  }

  if (!divisors.length) {
    sum += i;
    if (min === 0) min = i;
  }
}

if (sum === 0) return console.log(-1);
console.log(sum);
console.log(min);