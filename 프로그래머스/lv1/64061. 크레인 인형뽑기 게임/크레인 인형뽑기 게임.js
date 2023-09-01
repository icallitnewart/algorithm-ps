function solution(board, moves) {
    let answer = 0;
    const dolls = [];
    
    for(let i=0; i<moves.length; i++) {
        const pos = moves[i] - 1;
        
        for(let j=0; j<board.length; j++) {
            const column = board[j];
            const doll = column[pos];
            
            if(doll !== 0) {
                if(dolls[dolls.length - 1] === doll) {
                    dolls.pop();
                    answer += 2;
                } else {
                    dolls.push(doll);
                }
                
                board[j][pos] = 0;
                break;
            }
        }
    }
    
    return answer;
}