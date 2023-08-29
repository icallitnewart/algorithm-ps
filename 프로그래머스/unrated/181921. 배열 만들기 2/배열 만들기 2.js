function solution(l, r) {
    const answer = [];
    for(let i=l; i<=r; i++) {
        const nums = i.toString().split('');
        const isPassed = nums.every(n=> n === '0' || n === '5')
        if(isPassed) answer.push(i);
    }
    
    return answer.length > 0 ? answer : [-1];
}