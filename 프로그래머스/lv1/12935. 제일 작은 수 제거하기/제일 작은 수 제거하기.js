function solution(arr) {
    var answer = [];
    const smallest = [...arr].sort((a, b)=> parseInt(a) - parseInt(b))[0];
    
    if(arr.length === 1) {
        answer.push(-1);
    } else {
        answer = [...arr].filter(n=> n > smallest);
    }
    return answer;
}