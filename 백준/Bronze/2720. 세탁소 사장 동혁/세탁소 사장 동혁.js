const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i <= input[0]; i++) {
  let money = +input[i];
  const units = [[25, 0], [10, 0], [5, 0], [1, 0]];

  for (let j = 0; j < units.length; j++) {
    const unit = units[j];
    unit[1] += Math.floor(money / unit[0]);
    money = money % unit[0];
  }

  console.log(units.reduce((acc, [_, q], idx) => acc += idx === 0 ? q : ` ${q}`, ''));
}