function solution(n) {
    const arr = new Array(n + 1).fill(true);
    arr[0] = false; //0
    arr[1] = false; //1
    
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if (arr[i]) {
            for(let j = i*i; j<=n; j+=i) arr[j] = false;
        }
    }
    
    return arr.filter(v => v).length;
}