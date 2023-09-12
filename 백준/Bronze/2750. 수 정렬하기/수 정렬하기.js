const [N, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
numbers.sort((a, b) => a - b);

for (const number of numbers) console.log(number);