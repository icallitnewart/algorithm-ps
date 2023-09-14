function solution(number, limit, power) {
    let answer = 0;
    const countDivisors = (n)=> {
        let divisors = 0;
        for(let i=1; i*i<=n; i++) {
            if(n % i === 0) {
                divisors++;
                if(i !== n / i) divisors++;
            }
        }
        
        return divisors;
    };
    
    for(let n=1; n<=number; n++) {
        const ability = countDivisors(n);
        answer += (ability > limit) ? power : ability;
    }
    
    return answer;
}