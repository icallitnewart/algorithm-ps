function solution(name) {
    let answer = 0;
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const len = name.length;
    let move = len - 1; //최대 이동 회수

    for(let i=0; i<len; i++) {    
        //상하 조작
        const idx = alphabets.indexOf(name[i]);
        if(idx > alphabets.length / 2) answer += alphabets.length - idx;
        else answer += idx;
        
        //좌우 조작
        let next = i + 1;
        //A가 아닌 다음 문자열 인덱스 찾기
        while(next < len && name[next] === 'A') next++;
        
        //쭉 가는 경우
        const straight = i + len - next;
        move = Math.min(move, straight + Math.min(i, len - next));
    }
    
    return answer + move;
}