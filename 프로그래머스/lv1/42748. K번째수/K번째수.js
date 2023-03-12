function solution(array, commands) {
    let answer = [];
    
    for(let cm of commands) {
        const [i, j, k] = cm;
        const cutArr = [...array].slice(i-1, j);  //배열 자르기
        cutArr.sort((a, b)=> a - b);  //정렬
        answer.push(cutArr[k - 1]);  //k번째 숫자
    }
    
    return answer;
}