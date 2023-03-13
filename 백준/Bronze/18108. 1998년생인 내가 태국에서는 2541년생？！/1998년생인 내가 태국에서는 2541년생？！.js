const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const year = parseInt(input);
const answer = year - 543;

console.log(answer);