function solution(n) {
    const arr = Array.from({length: n}, (_, i)=> Array(n).fill(0));
    let num = 1;
    let cycle = 0;
    let x = 0, y = 0;
    
    while(num <= n * n) {
        //left to right
        for(let i=cycle; i<n-cycle; i++) {
            arr[cycle][i] = num++;
        } 
        
        //top to bottom
        for(let i=cycle+1; i<n-cycle; i++) {
            arr[i][n-cycle-1] = num++;
        }
    
        //right to left
        if(cycle < n-cycle-1) {
            for(let i=n-cycle-2; i>=cycle; i--) {
                arr[n-cycle-1][i] = num++;
            }
        }
    
        //bottom to top
        if(cycle < n-cycle-1) {
            for(let i=n-cycle-2; i>cycle; i--) {
                arr[i][cycle] = num++;
            }
        }
        
        cycle++;
    }
    
    return arr;
}