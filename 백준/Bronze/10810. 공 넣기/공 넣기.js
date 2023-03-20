const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' '));
const [[N, M], ...rules] = input;
let balls = [];

rules.forEach((rule) => {
  const [i, j, k] = rule.map(n => Number(n));
  for (let n = 1; n <= N; n++) {
    const basketNum = balls[n - 1];
    const isEmpty = (basketNum === undefined);
    const inRange = (n >= i && n <= j);

    if (isEmpty) balls.push(inRange ? k : 0);
    else balls[n - 1] = (inRange) ? k : balls[n - 1];
  }
});

console.log(balls.join(' '));