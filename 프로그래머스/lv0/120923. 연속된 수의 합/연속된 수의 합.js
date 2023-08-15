function solution(num, total) {
    let answer = [];
    for(let i=-num; i<=total; i++) {
        let sum = 0;
        
        for(let j=0; j<num; j++) {
            sum += i + j;
            answer.push(i + j);
            if(sum === total) return answer;
        }
        
        sum = 0;
        answer = [];
    }
}