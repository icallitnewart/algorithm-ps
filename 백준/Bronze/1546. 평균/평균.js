const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const scores = input[1].split(' ').map(n => +n);
const M = Math.max(...scores);
const newScores = scores.map(n => n / M * 100);
const sum = newScores.reduce((acc, cur) => acc + cur, 0);

console.log(sum / N);