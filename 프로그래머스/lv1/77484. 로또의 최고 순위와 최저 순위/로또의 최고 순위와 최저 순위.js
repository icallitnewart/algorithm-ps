function solution(lottos, win_nums) {
    let right = 0, unknown = 0;
    const ranks = [6, 5, 4, 3, 2, 1];
    
    for(let num of lottos) {
        if(num === 0) unknown++;
        if(win_nums.includes(num)) right++;
    }
    
    return [right + unknown, right].map(n=> (n === 0) ? 6 : 6 - n + 1);
}