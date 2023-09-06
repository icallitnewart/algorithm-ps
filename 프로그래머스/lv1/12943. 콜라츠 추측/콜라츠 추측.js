function solution(num) {
    let answer = 0;
    
    if(num === 1) return answer;
    while(num > 1) {
        if(answer === 500) return -1;
        num % 2 > 0 ? num = num * 3 + 1 : num /= 2;
        answer++;
    }
    return answer;
}