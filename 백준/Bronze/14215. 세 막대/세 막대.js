const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let [a, b, c] = input.sort((a, b) => b - a);

if (a >= b + c) a = b + c - 1;
console.log(a + b + c);