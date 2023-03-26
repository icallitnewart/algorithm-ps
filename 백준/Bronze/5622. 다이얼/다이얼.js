const input = require('fs').readFileSync('/dev/stdin').toString();
const strArr = input.split('');
const arr = [
  ['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I'], ['J', 'K', 'L'],
  ['M', 'N', 'O'], ['P', 'Q', 'R', 'S'], ['T', 'U', 'V'], ['W', 'X', 'Y', 'Z']
];
let answer = 0;

for (const str of strArr) {
  arr.forEach((set, i) => {
    const num = i + 2;
    const time = num + 1;
    const isExist = set.some(letter => letter === str);
    if (isExist) answer += time;
  });
}

console.log(answer);