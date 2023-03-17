const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.replace('\r', ''));
const [len, ...testCase] = input;

for (let i = 0; i < len; i++) {
  const [num1, num2] = testCase[i].split(' ').map(n => Number(n));
  const sum = num1 + num2;
  console.log(`Case #${i + 1}: ${sum}`);
}