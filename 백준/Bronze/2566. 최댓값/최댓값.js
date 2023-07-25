const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const numbers = input.map(el => el.split(' ').map(Number));
let maxNum = null, column = 0, row = 0;

for (let i = 0; i < numbers.length; i++) {
  const highest = [...numbers[i]].sort((a, b) => b - a)[0];
  if (maxNum < highest || !maxNum) {
    maxNum = highest;
    column = i + 1;
    row = numbers[i].indexOf(highest) + 1;
  }
}
console.log(maxNum);
console.log(column, row);