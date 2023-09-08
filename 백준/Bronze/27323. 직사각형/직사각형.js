const [w, h] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(w * h);