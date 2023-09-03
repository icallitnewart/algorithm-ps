function solution(arr, k) {
    const newArr = [...new Set(arr)];
    const answer = [];
    
    for(let i=0; i<k; i++) {
        newArr[i] !== undefined ? answer.push(newArr[i]) : answer.push(-1);
    }
    
    return answer;
}