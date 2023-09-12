function solution(arr, flag) {
    const answer = [];
    
    for(let i=0; i<arr.length; i++) {
        const num = arr[i];
        if(flag[i]) {
            for(let j=0; j<num*2; j++) answer.push(num);
        } else {
            answer.splice(-num);
        }
    }
    
    return answer;
}