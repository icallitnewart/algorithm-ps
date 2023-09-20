function solution(maps) {
    //x, y 좌표, 거리 기록
    const queue = [ [0, 0, 1] ];
    //상, 하, 좌, 우 이동시 거리
    const dx = [0, 0, -1, 1], dy = [-1, 1, 0, 0];
    
    while(queue.length) {
        const [x, y, distance] = queue.shift();
        
        //마지막 지점 도달시 거리 return
        if(x === maps[0].length - 1 && y === maps.length -1) return distance;
        
        for(let i=0; i<4; i++) {
            const nextX = x + dx[i], nextY = y + dy[i];
            
            //다음 칸이 맵을 벗어나지 않는지 확인
            if(nextX >= 0 && nextX < maps[0].length &&
              nextY >= 0 && nextY < maps.length) {
                //방문 여부, 벽이 없는지 확인
                if(maps[nextY][nextX]) {
                    queue.push([nextX, nextY, distance + 1]);
                    maps[nextY][nextX] = 0;
                }
            }
        }
    }
    
    return -1;
}