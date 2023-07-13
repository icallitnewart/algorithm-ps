function solution(left, right) {
    let answer = 0;
    for(let n=left; n<=right; n++) {
        const divisors = [];
        for(let i=1; i<=n; i++) {
            if(n % i === 0) divisors.push(i); 
        }
        if(divisors.length % 2 === 0) answer += n;
        else answer -= n;
    }
    
    return answer;
}