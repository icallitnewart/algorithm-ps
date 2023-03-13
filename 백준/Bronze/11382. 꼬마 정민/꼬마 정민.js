const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
const [a, b, c] = input;
console.log(parseInt(a) + parseInt(b) + parseInt(c));