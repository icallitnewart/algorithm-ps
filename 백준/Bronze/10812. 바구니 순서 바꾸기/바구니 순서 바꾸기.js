const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '));
const [N, M] = input[0].map(Number);
let balls = Array.from(Array(N + 1).keys()).splice(1);
let newBalls = [...balls];

for (let n = 1; n <= M; n++) {
  const [begin, end, mid] = input[n].map(n => +n - 1);
  let changeIndex = mid;
  for (let n2 = begin; n2 <= end; n2++) {
    if (changeIndex > end) changeIndex = begin;
    newBalls[n2] = balls[changeIndex];
    changeIndex++;
  }
  balls = [...newBalls];
}
console.log(balls.join(' '));