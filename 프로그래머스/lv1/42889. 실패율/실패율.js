function solution(N, stages) {
    const rates = {};
    for(let level=1; level<=N; level++) {
        const challenge = stages.filter(v=> v >= level).length;
        const success = stages.filter(v=> v === level).length; 
        rates[level] = success / challenge;
    }
    
    return Object.entries(rates)
                .map(([k, v])=> ({[k]: v}))
                .sort((a, b)=> Object.values(b) - Object.values(a))
                .map(obj=> Number(Object.keys(obj)[0]));
}