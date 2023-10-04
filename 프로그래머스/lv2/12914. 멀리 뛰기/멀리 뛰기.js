function solution(n) {
    const dp = new Array(n+1).fill(0);
    
    dp[1] = 1;
    if(n > 1) dp[2] = 2;
    
    for(let i=3; i<=n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    
    return dp[n];
}

/*
//피보나치 수열
function solution(n) {
    if(n <= 2) return n;
    
    let a = 1, b = 2;
    
    for(let i=3; i<=n; i++) {
        let temp = b;
        b = (a + b) % 1234567;
        a = temp;
    }
    
    return b;
}
*/