const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [H, M] = input;
H = parseInt(H);
M = parseInt(M);
let hour;
let minute;
const faster = 45;

if (M >= faster) {
  hour = H;
  minute = M - faster;
} else {
  hour = H - 1;
  if (hour < 0) hour = 24 + hour;
  minute = 60 + (M - faster);
}

console.log(hour + " " + minute);