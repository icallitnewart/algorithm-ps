function solution(survey, choices) {
    const type = new Map();
    
    for(let i=0; i<survey.length; i++) {
        const disagree = survey[i][0], agree = survey[i][1];
        const choice = choices[i];
        
        if(choice >= 1 && choice <= 3) {
            type.set(disagree, (type.get(disagree) || 0) + 4 - choice);
        }
        else if(choice >= 5 && choice <= 7) {
            type.set(agree, (type.get(agree) || 0) + choice - 4);
        }
    }
    
    
    let answer = '';
    const personality = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    
    for(const types of personality) {
        const typeA = (type.get(types[0]) || 0);
        const typeB = (type.get(types[1]) || 0);
        
        if(typeA > typeB) answer += types[0];
        else if(typeB > typeA) answer += types[1];
        else answer += types[0];
    }
    
    return answer;
}