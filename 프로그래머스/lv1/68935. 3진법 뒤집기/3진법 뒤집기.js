function solution(n) {
    const num = [...n.toString(3)].reverse().join('');
    return parseInt(num, 3);
}