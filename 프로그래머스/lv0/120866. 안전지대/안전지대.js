function solution(board) {
    const bombs = [];
    board.forEach((row, x)=> {
        row.forEach((col, y)=> {
            if(col===1) {
                if(board[x-1]?.[y] === 0) board[x-1][y] = 2;
                if(board[x+1]?.[y] === 0) board[x+1][y] = 2;

                if(board[x-1]?.[y-1] === 0) board[x-1][y-1] = 2;
                if(board[x]?.[y-1] === 0) board[x][y-1] = 2;
                if(board[x+1]?.[y-1] === 0) board[x+1][y-1] = 2;

                if(board[x-1]?.[y+1] === 0) board[x-1][y+1] = 2;
                if(board[x]?.[y+1] === 0) board[x][y+1] = 2;
                if(board[x+1]?.[y+1] === 0) board[x+1][y+1] = 2;
            }
        });
    });

    return board.flat().filter(pos => pos === 0).length;
}