function solution(my_string, m, c) {
    let answer = '';

    for(let i=0; i<my_string.length; i++) {
        if(i % m === c - 1) answer += my_string.charAt(i);
    }
    
    return answer;
}