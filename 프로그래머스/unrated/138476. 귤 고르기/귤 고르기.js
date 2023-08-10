function solution(k, tangerine) {
    const obj = {};
    for(let size of tangerine) obj[size] = (obj[size] + 1 || 1);

    let answer = 0;
    let total = 0;
    const counts = Object.values(obj).sort((a, b)=> b - a);
    for(let count of counts) {
        if(count + total >= k) return answer + 1; 
        total += count;
        answer++;
    };
    
    return answer;
}