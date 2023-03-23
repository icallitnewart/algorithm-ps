const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [[_T], ...testCases] = input.map(el => el.replace('\r', '').split(' '));

for (const testCase of testCases) {
  const [R, string] = testCase;
  const answer = [...string.trim()].reduce((acc, cur) => {
    let repeatedStr = '';
    for (let i = 0; i < R; i++) repeatedStr += cur;
    acc += repeatedStr;
    return acc;
  }, '');
  console.log(answer);
}