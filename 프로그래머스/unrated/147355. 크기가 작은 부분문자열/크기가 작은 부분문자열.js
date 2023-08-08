function solution(t, p) {
    const len = p.length;
    const nums = [];
    
    for(let i=0; i<t.length; i++) {
        if(t.length - i < len) break;
        nums.push(t.slice(i, i + len));
    }
    
    return nums.filter(num=> +num <= +p).length;
}