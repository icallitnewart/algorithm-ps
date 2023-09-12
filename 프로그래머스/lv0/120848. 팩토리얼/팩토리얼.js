function solution(n) {
    let total = 1;
    for(let i=1; i<=n; i++) {
        if(total * i > n) return i - 1;
        else if(total * i === n) return i;
        else total *= i;
    }
}