const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const sortedNum = input.split('').sort((a, b) => b - a);

console.log(sortedNum.join(''));