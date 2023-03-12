function solution(n) {
    let answer = '';
    const letters = [ "수", "박" ];
    
    for(let i=1; i<=n; i++) {
        if(i % 2 === 0) answer += letters[1];
        else answer += letters[0];
    }
    return answer;
}