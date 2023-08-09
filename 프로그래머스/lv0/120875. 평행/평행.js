function solution(dots) {
    for(let i=0; i<dots.length; i++) {
        for(let j=i+1; j<dots.length; j++) {
            const dots2 = dots.filter((d, di)=> di !== i && di !== j);
            if((dots[i][0] - dots[j][0]) / (dots[i][1] - dots[j][1]) 
               === (dots2[0][0] - dots2[1][0]) / (dots2[0][1] - dots2[1][1])) return 1;
        }
    }
    return 0;
}