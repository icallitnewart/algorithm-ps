function solution(N, stages) {
    let rates = [];
    for(let level=1; level<=N; level++) {
        const challenge = stages.filter(stage=> stage >= level).length;
        const success = stages.filter(stage=> stage === level).length; 
        rates = [...rates, { [level] : success / challenge }];
    }
    
    return rates
            .sort((a, b)=> Object.values(b) - Object.values(a))
            .map(obj=> Number(Object.keys(obj)[0]));
    
}