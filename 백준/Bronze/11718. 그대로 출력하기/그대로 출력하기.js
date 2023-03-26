const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const words = input.map(word => word.replace('\r', ''));
for (const word of words) console.log(word);