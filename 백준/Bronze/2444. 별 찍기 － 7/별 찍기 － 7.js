const input = require('fs').readFileSync('/dev/stdin').toString();
const N = Number(input);
const numOfLines = 2 * N - 1;
const blank = ' ';
const star = '*';

for (let i = 1; i <= numOfLines; i++) {
  let line = '';
  const blankRepeat = i < N ? N - i : i - N;
  const starRepeat = i < N ? (i * 2) - 1 : ((2 * N - i) * 2) - 1;

  if (i !== N) line += blank.repeat(blankRepeat);
  line += star.repeat(starRepeat);

  console.log(line);
}