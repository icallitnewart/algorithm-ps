const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

for (let i = 0; i < input.length - 1; i++) {
  const num = input[i];
  const divisors = [];

  for (let n = 1; n <= num / 2; n++) {
    if (num % n === 0) divisors.push(n);
  }

  if (divisors.reduce((a, c) => a + c, 0) === num) {
    const str = divisors.reduce((a, c, i) => (i === divisors.length - 1) ? a + `${c}` : a + `${c} + `, `${num} = `);
    console.log(str);
  } else {
    console.log(`${num} is NOT perfect.`);
  }
}