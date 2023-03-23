const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [T, ...testCases] = input;

for (let i = 0; i < T; i++) {
  const string = testCases[i].split('\\')[0].trim();
  console.log(string[0] + string[string.length - 1]);
}