const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [size, ...numbers] = input;
const [N, M] = size.split(' ');
const A = numbers.slice(0, N).map(el => el.split(' ').map(Number));
const B = numbers.slice(N).map(el => el.split(' ').map(Number));
const answer = [];

for (let i = 0; i < N; i++) {
  const arr = [];
  for (let j = 0; j < M; j++) {
    const sum = A[i][j] + B[i][j];
    arr.push(sum);
  }
  answer.push(arr);
}

console.log(answer.map(el => el.join(' ')).join('\n'));