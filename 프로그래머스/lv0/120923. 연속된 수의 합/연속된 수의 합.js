function solution(num, total) {
    const mid = total / num;
    const gap = mid - Math.floor(num / 2);
    return Array.from({ length: num }, (_, i)=> Number.isInteger(mid) ?  gap + i : Math.ceil(gap + i));
}