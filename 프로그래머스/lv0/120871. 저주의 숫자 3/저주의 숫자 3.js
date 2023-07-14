function solution(n) {
    let num = 0;
    
    for(let i=0; i<n; i++) {
        let newNum = num + 1;
        while(newNum % 3 === 0 || newNum.toString().includes('3')) {
            newNum += 1;
        }
        num = newNum;
    }
    
    return num;
}