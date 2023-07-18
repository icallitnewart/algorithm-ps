function solution(spell, dic) {
    let answer = 2;
    for(let word of dic) {
        if(spell.every(char=> word.includes(char))) {
            answer = 1;
            break;
        };
    }
    
    return answer;
}