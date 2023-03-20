const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' '));
const [N, M] = input[0].map(n => Number(n));

//바구니 셋팅
let basketObj = {};
for (let n = 1; n <= N; n++) basketObj[n] = [];

for (let a = 1; a <= M; a++) {
  const rules = input[a];
  //i번 바구니부터 j번 바구니까지에 k번 번호
  const [i, j, k] = rules.map(n => Number(n));

  for (let b = i; b <= j; b++) {
    const basket = basketObj[b];
    if (basket.includes(k)) {
      const index = basket.indexOf(k);
      basket.splice(index, 1);
    }
    basketObj[b].push(k);
  }
}

let answer = [];
for (const key in basketObj) {
  const balls = Object.values(basketObj[key]);
  const lastNumber = balls.length > 0 ? balls[balls.length - 1] : 0
  answer.push(lastNumber);
}
console.log(answer.join(' '));