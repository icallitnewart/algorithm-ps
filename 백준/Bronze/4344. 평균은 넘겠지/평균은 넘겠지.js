const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const C = Number(input[0]);

for (let i = 1; i <= C; i++) {
  const [N, ...scores] = input[i].split(' ').map(n => +n);
  const average = scores.reduce((acc, cur) => acc + cur, 0) / N;
  let aboveAverage = 0;
  for (let j = 0; j < N; j++) {
    if (Number(scores[j]) > average) aboveAverage++;
  }
  const percentage = (aboveAverage / N) * 100;
  console.log(percentage.toFixed(3) + "%");
}