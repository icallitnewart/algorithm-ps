const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [num1, num2] = input.map(n => +[...n].reverse().join(''));
console.log(num1 > num2 ? num1 : num2);