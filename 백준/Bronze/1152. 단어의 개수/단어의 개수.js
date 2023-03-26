const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(
  (input.length === 1 && !input[0])
    ? 0 : input.length
);