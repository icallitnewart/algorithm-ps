function solution(m, n, board) {
    board = board.map(col=> col.split(''));
    let answer = 0;
    
    while(true) {
        //블락 삭제
        const removeBlocks = new Set();
        for(let i=0; i<board.length-1; i++) {
            const column = board[i];
            const nextColumn = board[i+1];

            for(let j=0; j<column.length-1; j++) {
                const target = column[j];

                if(target !== '0' && 
                   target === column[j+1] && 
                   target === nextColumn[j] && 
                   target === nextColumn[j+1]
                  ) {
                    removeBlocks.add(`${i},${j}`);
                    removeBlocks.add(`${i},${j+1}`);
                    removeBlocks.add(`${i+1},${j}`);
                    removeBlocks.add(`${i+1},${j+1}`);
                }
            }
        }
        
        //더 이상 삭제할 블록이 없다면 answer를 리턴
        if(removeBlocks.size === 0) return answer;
        
        removeBlocks.forEach(pos => {
            const [x, y] = pos.split(",").map(Number);
            board[x][y] = '0';
            answer++;
        });
        

        //블락 재정렬
        for(let i=board.length-1; i>=0; i--) {
            const column = board[i];

            for(let j=0; j<column.length; j++) {
                if(column[j] === '0') {
                    let aboveIdx = i - 1;
                    while(aboveIdx >= 0 && board[aboveIdx][j] === '0') aboveIdx -= 1;

                    if(aboveIdx >= 0) {
                        const aboveBlock = board[aboveIdx][j];
                        board[aboveIdx][j] = '0';
                        column[j] = aboveBlock;
                    }
                }
            }
        }
    }
}