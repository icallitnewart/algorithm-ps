const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const croatianAlphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let count = 0;
let str = input;

for (const alphabet of croatianAlphabets) {
  if (str.indexOf(alphabet) !== -1) {
    const numOfAlphabet = (str.match(new RegExp(alphabet, 'g'))).length;
    count += numOfAlphabet;
    str = str.replaceAll(alphabet, '*');
  }
}
count += str.replaceAll('*', '').split('').length;
console.log(count);