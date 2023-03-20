const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => Number(n));
const max = Math.max(...input);
const index = input.indexOf(max) + 1;
console.log(max);
console.log(index);