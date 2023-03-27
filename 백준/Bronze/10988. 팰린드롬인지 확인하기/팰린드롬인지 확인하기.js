const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const word = [...input];
const reversed = [...input].reverse();

for (let i = 0; i < word.length; i++) {
  if (word[i] !== reversed[i]) return console.log(0);
}
console.log(1);