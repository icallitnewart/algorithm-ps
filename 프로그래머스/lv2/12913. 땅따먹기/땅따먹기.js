function solution(land) {
    const scores = land.slice(1).reduce((acc, cur) => {
        return cur.map((v, i) => v + Math.max(...acc.filter((_, idx) => idx !== i)));
    }, land[0]);
    return Math.max(...scores);
}