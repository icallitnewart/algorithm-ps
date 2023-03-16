const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(n => parseInt(n));
const [d1, d2, d3] = input;

if (d1 === d2 && d2 === d3 && d3 === d1) {
  prize = 10000 + (d1 * 1000);
} else if (d1 !== d2 && d2 !== d3 && d3 !== d1) {
  const biggestN = input.reduce((acc, cur) => acc > cur ? acc : cur, 0);
  prize = 100 * biggestN;
} else {
  const sameN = input.filter((n, i) => input.indexOf(n) !== i)[0];
  prize = 1000 + (sameN * 100);
}
console.log(prize);