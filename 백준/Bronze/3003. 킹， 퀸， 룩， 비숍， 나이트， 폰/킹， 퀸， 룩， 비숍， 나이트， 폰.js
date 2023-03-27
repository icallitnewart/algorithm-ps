const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const foundPieces = input.map(n=> +n);
const neededPieces = [1, 1, 2, 2, 2, 8];
let missingPieces = [];

foundPieces.forEach((piece, i)=> {
  missingPieces.push(neededPieces[i] - piece);
});

console.log(missingPieces.join(' '));