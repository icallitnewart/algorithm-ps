const numbers = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const average = numbers.reduce((a, c) => a + c, 0) / 5;
const median = numbers.sort((a, b) => a - b)[2];

console.log(average);
console.log(median);