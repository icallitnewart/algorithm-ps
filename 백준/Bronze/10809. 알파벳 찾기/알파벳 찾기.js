const S = require('fs').readFileSync('/dev/stdin').toString().trim();
//String.fromCharCode(n) : 유니코드 값을 문자열로 변환
const alphabet = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 97));

for (const letter of alphabet) console.log(S.indexOf(letter));