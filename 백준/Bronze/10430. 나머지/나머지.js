const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
const first = (a + b) % c;
const second = ((a % c) + (b % c)) % c;
const third = (a * b) % c;
const fourth = ((a % c) * (b % c)) % c;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);