const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const year = parseInt(input);

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
  return console.log(1);
} else return console.log(0);