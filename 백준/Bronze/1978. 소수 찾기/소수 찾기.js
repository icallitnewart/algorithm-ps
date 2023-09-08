const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const numbers = input[1].split(' ').map(Number);
let answer = 0;

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];

  if (num !== 1) {
    const divisors = [];

    for (let n = 2; n <= num / 2; n++) {
      if (num % n === 0) divisors.push(n);
    }

    if (!divisors.length) answer++;
  }
}

console.log(answer);