const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const xArr = [], yArr = [];

for (const coord of input) {
  const [x, y] = coord.split(' ').map(Number);
  xArr.push(x);
  yArr.push(y);
}

const getUniqueNumber = (arr) => {
  return arr.filter((n, _, self) => self.indexOf(n) === self.lastIndexOf(n));
};
const x = getUniqueNumber(xArr);
const y = getUniqueNumber(yArr);
console.log(`${x} ${y}`);