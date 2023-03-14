const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
let [a, b] = input;
a = parseInt(a);
b = parseInt(b);
let answer = "";

if (a > b) answer = ">";
else if (a < b) answer = "<";
else answer = "==";
console.log(answer);