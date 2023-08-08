function solution(s) {
    let [changes, zeros] = [0, 0];
    while(s !== '1') {
        changes++;
        zeros += s.split('').filter(n=> n === '0').length;
        
        const len = s.replaceAll('0', '').length;
        const num = len.toString(2);
        s = num.toString();
    }
    
    return [changes, zeros];
}