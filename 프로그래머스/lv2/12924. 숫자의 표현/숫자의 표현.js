function solution(n) {
    let answer = 0;
    for(let i=1; i<=n/2; i++) {
        let sum = i;
        for(let j=i+1; j<=n; j++) {
            if(sum + j <= n) {
                sum += j;
                if(sum === n) answer += 1;
            } else {
                break;
            }
        }
    }
    
    return answer + 1;
}