//피보나치 수열
function solution(n) {
    if(n <= 2) return n;
    
    let a = 1, b = 2;
    
    for(let i=3; i<=n; i++) {
        const nextJump = (a + b) % 1234567;
        a = b;
        b = nextJump;
    }
    
    return b;
}

/*
//동적 프로그래밍 (PASS)
function solution(n) {
    const dp = new Array(n+1).fill(0);
    
    dp[1] = 1;
    if(n > 1) dp[2] = 2;
    
    for(let i=3; i<=n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    
    return dp[n];
}

//조합 (FAIL)
function factorial(n) {
    if(n <= 1) return 1;
    let result = 1;
    for(let i=2; i<=n; i++) result *= i;
    return result;
}

// n! / (r! * (n - r)!)
function getCombinations(n, r) {
    return factorial(n) / (factorial(r) * factorial(n -r));
}

function solution(n) {
    let answer = 0;
    let numOfTwo = 0;
    
    while(numOfTwo <= n / 2) {
        const numOfJumps = numOfTwo + (n - numOfTwo * 2);
        answer += getCombinations(numOfJumps, numOfTwo);
        numOfTwo++;
    }
    
    
    return answer % 1234567;
}
*/