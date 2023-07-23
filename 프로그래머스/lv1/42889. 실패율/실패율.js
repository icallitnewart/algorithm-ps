function solution(N, stages) {
    const rates = [];
    for(let level=1; level<=N; level++) {
        const challenge = stages.filter(stage=> stage >= level).length;
        const failure = stages.filter(stage=> stage === level).length; 
        rates.push({ [level] : failure / challenge });
    }
    
    return rates.sort((a, b)=> Object.values(b) - Object.values(a))
                .map(obj=> Number(Object.keys(obj)[0]));   
}