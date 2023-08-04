function solution(board) {
    const bombs = [];
    board.forEach((row, rowIdx)=> {
        row.forEach((col, colIdx)=> {
            if(col===1) bombs.push([rowIdx, colIdx]); 
        });
    });
    
    for(let bomb of bombs) {
        const [x, y] = bomb;
        
        if(board[x-1]?.[y] === 0) board[x-1][y] = 2;
        if(board[x+1]?.[y] === 0) board[x+1][y] = 2;
        
        if(board[x-1]?.[y-1] === 0) board[x-1][y-1] = 2;
        if(board[x]?.[y-1] === 0) board[x][y-1] = 2;
        if(board[x+1]?.[y-1] === 0) board[x+1][y-1] = 2;
        
        if(board[x-1]?.[y+1] === 0) board[x-1][y+1] = 2;
        if(board[x]?.[y+1] === 0) board[x][y+1] = 2;
        if(board[x+1]?.[y+1] === 0) board[x+1][y+1] = 2;
    } 

    return board.flat().filter(pos => pos === 0).length;
}