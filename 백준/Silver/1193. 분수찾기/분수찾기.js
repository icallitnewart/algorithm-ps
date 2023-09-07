const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const nth = +input;
let round = 0;
let rest = 0;

if (nth === 1) return console.log('1/1');
for (let i = 1; i < nth; i += round + 1) {
  round++;
  rest = nth - i;
}
round++;

//round가 홀수면 분자가 내림차순 / 분모가 오름차순
if (round % 2 > 0) {
  console.log(`${round - rest + 1}/${rest}`)
} else {  //round가 짝수면 분자가 오름차순 / 분모가 내림차순
  console.log(`${rest}/${round - rest + 1}`)
}