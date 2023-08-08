function solution(numbers) {
    const excluded = [];
    for(let i=0; i<10; i++) {
        if(!numbers.includes(i)) excluded.push(i);
    }
    
    return excluded.reduce((acc, cur)=> acc + cur, 0);
}