const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const letters = input.map(el => el.replace('\r', '').split(''));
const row = Math.max(...letters.map(arr => arr.length));
const column = letters.length;
let answer = '';

for (let i = 0; i < row; i++) {
  for (let j = 0; j < column; j++) {
    if (letters[j][i]) answer += letters[j][i];
  }
}

console.log(answer);