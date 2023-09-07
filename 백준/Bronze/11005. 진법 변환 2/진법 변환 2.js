const [N, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(N.toString(B).toUpperCase());