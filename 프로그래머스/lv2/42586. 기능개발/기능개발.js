function solution(progresses, speeds) {
    const days = [];
    const answer = [];
    
    for(let i=0; i<progresses.length; i++) {
        const duration = Math.ceil((100 - progresses[i]) / speeds[i]);
        if(days[days.length - 1] >= duration) {
            answer[answer.length - 1] = (answer[answer.length - 1] || 0) + 1;
        } else {
            days.push(duration);
            answer.push(1);
        }
    }
    
    return answer;
}