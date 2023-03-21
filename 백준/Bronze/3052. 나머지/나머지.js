const numbers = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const remainders = numbers.map(n => n % 42);
const uniqueNum = new Set(remainders);
console.log([...uniqueNum].length);