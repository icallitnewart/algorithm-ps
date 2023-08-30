function solution(land) {
    //각 행에서 얻을 수 있는 최대 점수 계산하여 갱신
    const scores = land.reduce((acc, cur) => {
        //현재 칸의 점수 + 이전 행에서 얻을 수 있는 최대 점수 (인덱스 겹치지 않게)
        return cur.map((v, i) => v + Math.max(...acc.filter((_, idx) => idx !== i)));
    }, [0, 0, 0, 0]);
    return Math.max(...scores);
}