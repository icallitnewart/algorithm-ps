function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    const correct = patterns.map(pattern=> {
        return answers.filter((answer, i)=> answer === pattern[i % pattern.length]).length;
    });
    const maxScore = Math.max(...correct);
    
    return correct.reduce((acc, cur, i)=> {
                if(cur === maxScore) acc.push(i+1);
                return acc;
            }, []);
}