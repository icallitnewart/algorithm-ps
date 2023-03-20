const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' '));
const [[N, M], ...rules] = input;
let balls = new Array(Number(N)).fill(0);

rules.forEach((rule) => {
  const [i, j, k] = rule.map(n => Number(n));
  for (let n = 1; n <= N; n++) {
    const inRange = (n >= i && n <= j);
    if (inRange) balls[n - 1] = k;
  }
});

console.log(balls.join(' '));