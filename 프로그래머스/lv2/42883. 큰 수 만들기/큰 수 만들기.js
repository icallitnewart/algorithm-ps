function solution(number, k) {
    const stack = [];
    
    for(const n of number) {
        while(k && stack.length && stack[stack.length - 1] < n) {
            stack.pop();
            k--;
        }
        stack.push(n);
    }
    
    return stack.slice(0, stack.length - k).join('');
}