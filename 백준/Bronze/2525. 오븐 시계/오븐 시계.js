const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [currentTime, cookingTime] = input.map((t, i) => (i === 1) ? parseInt(t) : t);
let [hour, minute] = currentTime.split(' ').map(time => parseInt(time));

//시간 증가량
const hourInc = Math.floor(cookingTime / 60);
const minInc = cookingTime % 60;

hour += hourInc;
if (minute + minInc < 60) {
  minute += minInc;
} else {
  //minute 증가량이 60 이상이라면
  hour += 1;
  minute = (minute + minInc) - 60;
}

//24시 이상 초기화
if (hour >= 24) hour -= 24;

console.log(hour + " " + minute);