const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const num = parseInt(input);

console.log(num * 4);