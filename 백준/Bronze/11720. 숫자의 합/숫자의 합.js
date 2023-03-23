const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [_N, number] = input;
const sum = [...number].reduce((acc, cur) => acc + +cur, 0);

console.log(sum);