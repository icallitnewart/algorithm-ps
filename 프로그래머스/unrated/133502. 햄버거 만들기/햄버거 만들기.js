function solution(ingredient) {
    let answer = 0;
    const arr = [];
    
    for(let i=0; i<ingredient.length; i++) {
        arr.push(ingredient[i]);
        
        if(arr.length >= 4) {
            const target = arr.slice(-4).toString();
            if(target === '1,2,3,1') {
                arr.splice(arr.length - 4, 4);
                answer++;
            }
        } 
    }
    
    return answer;
}