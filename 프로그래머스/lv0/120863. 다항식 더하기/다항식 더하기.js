function solution(polynomial) {
    const arr = polynomial.replaceAll('+', '').split('  ');
    let x = 0, n = 0;
    
    for(let v of arr) {
        if(v.includes('x')) {
            const num = +v.replace('x', '');
            x += (num || 1);
        } else {
            n += +v;
        }
    }
    
    
    return n > 0  
            ? x === 0 
                ? `${n}` 
                : (x > 1 ? `${x}x + ${n}` : `x + ${n}`) 
            : (x > 1 ? `${x}x` : `x`);
}