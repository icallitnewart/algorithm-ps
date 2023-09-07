let [A, B, V] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let answer = 0;

answer = Math.ceil((V - A) / (A - B));
answer++;

console.log(answer);