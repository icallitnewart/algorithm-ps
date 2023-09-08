const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let num = parseInt(input);

if (num === 1) return;

for (let i = 2; i * i <= num; i++) {
  while (num % i === 0) {
    console.log(i);
    num /= i;
  }
}

if (num > 1) console.log(num);