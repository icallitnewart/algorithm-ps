const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const num = Number(input);
const lenOfLong = num / 4;
let answer = '';

for (let i = 0; i < lenOfLong; i++) answer += 'long ';
answer += 'int';

console.log(answer);