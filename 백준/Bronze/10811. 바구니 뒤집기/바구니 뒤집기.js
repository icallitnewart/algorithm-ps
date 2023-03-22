const numbers = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' '));
//N = 바구니 개수 & M = 바구니의 순서를 바꿀 횟수
const N = +numbers[0][0];
const M = +numbers[0][1];
const balls = Array.from(Array(N + 1).keys()).slice(1);
let newBalls = [...balls];

for (let a = 1; a <= M; a++) {
  //i번째 바구니부터 j번째 바구니의 순서를 역순으로
  const [i, j] = numbers[a].map(n => +n - 1);
  const oldBalls = [...newBalls];
  for (let b = i; b <= j; b++) {
    newBalls[b] = oldBalls[j - b + i];
  }
}
console.log(newBalls.join(' '));