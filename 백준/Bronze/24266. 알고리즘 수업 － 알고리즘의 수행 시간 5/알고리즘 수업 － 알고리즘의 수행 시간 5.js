const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = BigInt(input);

console.log(`${n * n * n}`);
console.log(3);