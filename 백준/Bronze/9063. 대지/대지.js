const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, ...rectangles] = input;
const xArr = [], yArr = [];

for (let i = 0; i < +N; i++) {
  const [x, y] = rectangles[i].split(' ').map(Number);
  xArr.push(x);
  yArr.push(y);
}

const xMin = Math.min(...xArr), xMax = Math.max(...xArr);
const yMin = Math.min(...yArr), yMax = Math.max(...yArr);

console.log((xMax - xMin) * (yMax - yMin));