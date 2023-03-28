const input = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase();
const letters = input.split('');
const countLetters = letters.reduce((acc, cur) => {
  acc[cur] ? acc[cur] += 1 : acc[cur] = 1;
  return acc;
}, {});
let arr = [];
for (const [key, value] of Object.entries(countLetters)) arr.push({ [key]: value });
const max = arr.sort((a, b) => Object.values(b) - Object.values(a))[0];
const duplicates = arr.filter(el => Object.values(el) == Object.values(max)[0]);

console.log((duplicates.length > 1) ? '?' : Object.keys(max)[0]);