const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.replace('\r', ''));
let [sum, len, ...items] = input;
sum = Number(sum), len = Number(len);
items = items.map(item => item.split(' '));
let money = 0;

for (let item of items) {
  const [price, qty] = item.map(el => Number(el));
  money += price * qty;
}

money === sum ? console.log('Yes') : console.log('No');