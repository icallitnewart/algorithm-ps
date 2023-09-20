function solution(number, k) {
    const stack = [];
    
    for(const n of number) {
        while(k && stack.length && stack[stack.length - 1] < n) {
            stack.pop();
            k--;
        }
        stack.push(n);
    }
    
    stack.splice(stack.length - k, k);
    return stack.join('');
}