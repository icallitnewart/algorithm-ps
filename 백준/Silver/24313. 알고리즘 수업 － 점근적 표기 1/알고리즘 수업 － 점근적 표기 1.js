const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a1, a0] = input[0].split(' ').map(Number);
const c = Number(input[1]);
const n0 = Number(input[2]);

for (let n = n0; n <= 100; n++) {
  if (a1 * n + a0 > c * n) return console.log(0);
}

console.log(1);