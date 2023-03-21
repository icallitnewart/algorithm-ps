const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' '));
//N = 바구니 개수 & M = 공을 바꿀 횟수
const [N, M] = input[0].map(n => +n);
const balls = Array.from(Array(N + 1).keys()).slice(1);

//i번 바구니와 j바구니에 들어있는 공 교환
for (let m = 1; m <= M; m++) {
  const [i, j] = input[m].map(n => +n);
  const ballI = balls[i - 1];
  const ballJ = balls[j - 1];
  balls[i - 1] = ballJ;
  balls[j - 1] = ballI;
}
console.log(balls.join(' '));