function solution(skill, skill_trees) {
    let answer = 0;
    
    for(const tree of skill_trees) {
        const skills = tree.split('');
        const order = skill.split('');
        
        for(let i=0; i<skills.length; i++) {
            const sk = skills[i];
            
            if(skill.includes(sk)) {
                if(order[0] === sk) order.shift();
                else break;
            }
            
            if(i === skills.length - 1) answer++; 
        }
    }
    
    return answer;
}