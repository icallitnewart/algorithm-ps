const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = Array.from({ length: 100 }, _ => new Array(10).fill(0));

for (let i = 1; i <= input[0]; i++) {
  const [x, y] = input[i].split(' ').map(n => Number(n) - 1);

  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      arr[j][k] = 1;
    }
  }
}

console.log(arr.reduce((acc, cur) => acc += cur.filter(v => v === 1).length, 0));