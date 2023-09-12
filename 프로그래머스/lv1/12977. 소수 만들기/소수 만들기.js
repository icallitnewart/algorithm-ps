function solution(nums) {
    let answer = 0;
    const len = nums.length;
    const isPrime = (n)=> {
        for(let i=2; i<=n/2; i++) if(n % i === 0) return false;
        return true;
    };
    
    for(let i=0; i<len; i++) {
        for(let j=i+1; j<len; j++) {
            for(let k=j+1; k<len; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) answer++;
            }
        }
    }
    
    return answer;
}