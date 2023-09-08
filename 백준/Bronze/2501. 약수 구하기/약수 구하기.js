const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const divisors = [N];

for (let i = 1; i <= N / 2; i++) {
  if (N % i === 0) divisors.push(i);
}

divisors.sort((a, b) => a - b);
console.log((divisors[K - 1] || 0));