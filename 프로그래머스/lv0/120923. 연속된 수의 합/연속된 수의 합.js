function solution(num, total) {
    const mid = total / num;
    const first = mid - Math.floor(num / 2);
    return Array.from({ length: num }, (_, i)=> Number.isInteger(mid) ? first + i : Math.ceil(first + i));
}