const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = BigInt(input);

console.log(`${n * (n - BigInt(1)) * (n - BigInt(2)) / BigInt((3 * 2))}`);
console.log(3);