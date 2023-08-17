function solution(citations) {
    citations.sort((a, b)=> b - a);
    let count = 0;
    
    for(let h=0; h<citations[0]; h++) {
        if(citations.filter(n=> n > h).length === h) count = h; 
    }
    
    return count;
}