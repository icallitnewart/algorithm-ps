function solution(brown, yellow) {
    let maxW = brown / 2 - 1;
    let minH = 3;
    for(let i=minH; i<=maxW; i++) {
        if(yellow % (i - 2) === 0) {
            const w = i;
            const h = yellow / (i - 2) + 2;
            if(w >= h && w * 2 + (h - 2) * 2 === brown) return [w, h]; 
        } 
    }
}