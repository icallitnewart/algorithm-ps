function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    const xMax = (board[0] - 1) / 2;
    const yMax = (board[1] - 1) / 2;
    
    for(let key of keyinput) {
        switch(key) {
            case 'left':
                x -= 1;
                if(Math.abs(x) > xMax) x = xMax * (x / Math.abs(x));
                break;
            case 'right':
                x += 1;
                if(Math.abs(x) > xMax) x = xMax * (x / Math.abs(x));
                break;
            case 'up':
                y += 1;
                if(Math.abs(y) > yMax) y = yMax * (y / Math.abs(y));
                break;
            case 'down':
                y -= 1;
                if(Math.abs(y) > yMax) y = yMax * (y / Math.abs(y));
                break;
        }
    }
    
    return [x, y];
}