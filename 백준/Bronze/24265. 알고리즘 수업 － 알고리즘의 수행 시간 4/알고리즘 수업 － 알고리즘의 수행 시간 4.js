const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

const cnt = new Array(n - 1).fill(0).reduce((a, c, i) => a + i + 1, 0);

console.log(cnt);
console.log(2);