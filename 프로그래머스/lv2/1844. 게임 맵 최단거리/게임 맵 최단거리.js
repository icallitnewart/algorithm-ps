function solution(maps) {
    let x = 0, y = 0;
    let temp = 0;
    while(x !== 4 && y !== 4) {
        if(temp === 4) break;
        if(maps[x+1][y]) x += 1;
        else if(maps[x][y+1]) y += 1;
        console.log(x, y)
        temp++;
    }
}