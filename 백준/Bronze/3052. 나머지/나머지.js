const numbers = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const remainders = numbers.map(n => n % 42);
const set = new Set(remainders);
const uniqueNum = [...set];
console.log(uniqueNum.length);