const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [string, n] = input;
const nth = +n - 1;

console.log(string[nth]);