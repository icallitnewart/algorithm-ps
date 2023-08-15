function solution(num, total) {
    const mid = total / num;
    const first = Math.ceil(mid - (num / 2));
    return Array.from({ length: num }, (_, i)=> first + i);
}