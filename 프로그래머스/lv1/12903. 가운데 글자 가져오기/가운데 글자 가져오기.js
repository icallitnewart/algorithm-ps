function solution(s) {
    let answer = '';
    const len = s.length;
    const midIndex = Math.ceil(len/2) - 1;
    
    //홀수
    answer = s[midIndex];
    //짝수
    if(len % 2 === 0) answer += s[midIndex + 1];
    
  return answer; 
}