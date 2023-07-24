const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, ...words] = input;
let answer = 0;

for (let word of words) {
  const isGroupWord = !word.split('').find((letter, idx) => {
    return word.substring(0, idx).split('').reverse().indexOf(letter) > 0;
  });

  if (isGroupWord) answer += 1;
}

console.log(answer);