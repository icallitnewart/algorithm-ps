function solution(s) {
    let [changes, zeros] = [0, 0];
    while(s !== '1') {
        const zeroCount = s.split('').filter(n=> n === '0').length;
        const len = s.length - zeroCount;
        const num = len.toString(2);
        
        s = num.toString();
        changes++;
        zeros += zeroCount;
    }
    
    return [changes, zeros];
}