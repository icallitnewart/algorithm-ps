const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, k] = input[0].split(' ').map(Number);
const scores = input[1].split(' ').map(Number);

console.log(scores.sort((a, b) => b - a)[k - 1]);