function solution(s) {
    let answer = 0;
    const open = ['(', '[', '{'];
    const closed = [')', ']', '}'];
    
    if(s.length % 2 > 0) return 0;
    
    for(let i=0; i<s.length; i++) {
        const brackets = [];
        for(let bracket of s.split('')) {
            const oIdx = open.indexOf(brackets[brackets.length - 1]);
            const cIdx = closed.indexOf(bracket);
            
            if(cIdx >= 0 && cIdx === oIdx) {
                brackets.pop();
            } else {
                brackets.push(bracket);
            }
        };
        if(brackets.length === 0) answer++;
        
        const rest = s.substring(1, s.length);
        const first = s[0];
        s = rest + first;
    }
    
    return answer;
}