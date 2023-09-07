const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let dotsPerLine = 2;

for (let i = 0; i < input; i++) {
  dotsPerLine += dotsPerLine - 1;
}

console.log(dotsPerLine ** 2);