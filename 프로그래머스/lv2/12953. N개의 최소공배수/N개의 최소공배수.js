function solution(arr) {
    const findGCD = (a, b)=> {  //최대공약수
        //나머지가 0이 될 때까지 작은 수로 큰 수를 나눈다.
        let big = Math.max(a, b);
        let small = Math.min(a, b);
        
        while(small > 0) {
            let rest = big % small;
            big = small;
            small = rest;
        }
        
        return big;
    };
    
    const findLCM = (a, b)=> {  //최소공배수
        return (a * b) / findGCD(a, b);
    }
    
    return arr.reduce((acc, cur)=> findLCM(acc, cur), arr[0]);
}