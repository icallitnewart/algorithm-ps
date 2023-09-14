function solution(skill, skill_trees) {
    let answer = 0;
    const order = skill.split('');
    
    for(const tree of skill_trees) {
        const skills = tree.split('');
        const arr = [...order];
        
        for(let i=0; i<skills.length; i++) {
            const sk = skills[i];
            
            if(order.includes(sk)) {
                if(arr[0] === sk) arr.shift();
                else break;
            }
            
            if(i === skills.length - 1) answer++; 
        }
    }
    
    return answer;
}