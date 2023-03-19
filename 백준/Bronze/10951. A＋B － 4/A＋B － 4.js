const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' '));

for (const numbers of input) {
  const [a, b] = numbers.map(n => Number(n));
  console.log(a + b);
}