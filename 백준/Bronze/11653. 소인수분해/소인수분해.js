const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let num = parseInt(input);

if (num === 1) return;

while (true) {
  const divisors = [];

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) divisors.push(i);
  }

  if (!divisors.length) return console.log(num);
  else {
    num /= divisors[0];
    console.log(divisors[0]);
  }
}