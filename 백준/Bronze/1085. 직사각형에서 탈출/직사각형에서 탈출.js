const [x, y, w, h] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const dots = [[0, 0], [0, h], [w, 0], [w, h]];
let min = Infinity;

for (let dot of dots) {
  const [dotX, dotY] = dot;
  const dX = Math.abs(x - dotX);
  const dY = Math.abs(y - dotY);

  if (dX > dY) {
    if (dY < min) min = dY;
  } else {
    if (dX < min) min = dX;
  }
}

console.log(min);