function solution(n) {
    if(n === 0) return 0;
    return n % 2 + solution(Math.floor(n / 2));
}