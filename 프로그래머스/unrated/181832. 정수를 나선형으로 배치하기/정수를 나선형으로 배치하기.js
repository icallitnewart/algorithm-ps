function solution(n) {
    const arr = Array.from({length: n}, () => Array(n).fill(0));

    //(좌=>우), (상=>하), (우=>좌), (하=>상) 방향으로 움직일 때 x와 y의 변화
    const dx = [0, 1, 0, -1]; 
    const dy = [1, 0, -1, 0];

    let num = 1;
    let x = 0, y = 0, dir = 0;

    while(num <= n * n) {
        // 현재 칸이 배열 내부에 있고 아직 숫자가 채워지지 않았다면
        if ((x >= 0 && x < n) && (y >= 0 && y < n) && (arr[x][y] === 0)) {
            //숫자 채우기
            arr[x][y] = num++;
            
            //방향에 따라 x, y 값 변경
            x += dx[dir];
            y += dy[dir];
            
        } else { // 다음 칸이 배열 범위 밖이거나 이미 채워진 경우
            // x, y 값을 다시 배열 범위 안으로 넣어준다
            x -= dx[dir];
            y -= dy[dir];
            
            // 방향 변경
            dir = (dir + 1) % 4;
            
            // 방향에 따라 x, y 값 변경
            x += dx[dir];
            y += dy[dir];
        }
    }

    return arr;
}