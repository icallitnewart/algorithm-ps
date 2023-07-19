function solution(lines) {
    const range = new Array(200).fill(0);
    lines.forEach(([start, end])=> {
        for(let i=start; i<end; i++) {
            range[i + 100] += 1;
        }
    });
    
    return range.reduce((acc, cur)=> cur > 1 ? acc + 1 : acc, 0);
}