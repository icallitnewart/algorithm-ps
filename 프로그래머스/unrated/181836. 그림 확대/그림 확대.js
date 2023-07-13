function solution(picture, k) {
    const answer = [];
    picture.forEach(pic=> {
        const line = [...pic].reduce((acc, cur)=> acc + cur.repeat(k), '');
        for(let j=0; j<k; j++) answer.push(line);
    });
    return answer;
}