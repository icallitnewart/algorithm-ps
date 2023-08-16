function solution(k, m, score) {
    const apples = [];
    score.sort((a, b)=> b - a);
    
    for(let i=0; i<score.length - score.length % m; i++) {
        if((i + 1) % m === 0) apples.push(score[i]);
    }
    
    return apples.reduce((acc, cur)=> acc + (cur * m), 0);
}