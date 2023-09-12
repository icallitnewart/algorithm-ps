const [nums, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = nums.split(' ').map(Number);
let answer = Infinity;

for (let c = 0; c <= N - 8; c++) {
  for (let r = 0; r <= M - 8; r++) {
    let colorChange = 0;

    const isColorMatch = (target, color) => {
      if (target !== color) colorChange++;
    };

    for (let i = c; i < c + 8; i++) {
      for (let j = r; j < r + 8; j++) {
        const target = board[i][j];

        if (i % 2 === 0) {
          if (j % 2 === 0) isColorMatch(target, 'W');
          else isColorMatch(target, 'B');
        } else {
          if (j % 2 === 0) isColorMatch(target, 'B');
          else isColorMatch(target, 'W');
        }
      }
    }

    if (64 - colorChange < colorChange) colorChange = 64 - colorChange;
    if (colorChange < answer) answer = colorChange;
  }
}

console.log(answer);