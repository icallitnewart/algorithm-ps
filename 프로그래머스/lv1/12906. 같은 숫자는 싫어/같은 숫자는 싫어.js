function solution(arr) {
    let answer = [];
    
    arr.forEach((num, i)=> {
        const lastNum = answer[answer.length - 1];
        if(num !== lastNum) answer.push(num);   
    });

    return answer;
}