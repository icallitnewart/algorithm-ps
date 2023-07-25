function solution(s){
    let answer = false;
    const arr = [];
    
    if(s.length % 2 > 0) return false; 
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === `(`) arr.push(`(`);
        if(s[i] === `)`) {
            if(arr.length === 0) break;
            arr.pop();
        }
        
        if(i === s.length - 1 && arr.length === 0) answer = true;
    }
    
    return answer;
}