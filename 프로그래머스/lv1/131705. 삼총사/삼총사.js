function solution(number) {
    const answers = [];
    const len = number.length;
    
    for(let i=0; i<len; i++) {
        for(let j=i+1; j<len; j++) {
            for(let k=j+1; k<len; k++) {
                const a = number[i];
                const b = number[j];
                const c = number[k];
                if(a+b+c === 0) answers.push([a,b,c]);
            }
        }
    }
    return answers.length;
}