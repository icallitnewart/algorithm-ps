function solution(array, commands) {
    const answer = [];
    
    for(let command of commands) {
        const [i, j, k] = command;
        const newArr = array.slice(i-1, j).sort((a, b)=> a - b);
        answer.push(newArr[k-1]);
    }
    
    return answer;
}