function solution(x) {
    const numbers = x.toString().split('').map(Number);
    const sum = numbers.reduce((acc, cur)=> acc + cur, 0);
    return x % sum === 0;
}