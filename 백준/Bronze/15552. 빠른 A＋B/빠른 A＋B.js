const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.replace('\r', '').split(' '));
let answer = [];

for (let i = 1; i <= input[0]; i++) {
  answer.push(Number(input[i][0]) + Number(input[i][1]));
}
console.log(answer.join('\n'));