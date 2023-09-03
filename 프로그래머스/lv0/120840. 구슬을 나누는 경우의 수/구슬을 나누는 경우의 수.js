function solution(balls, share) {
    let numer = 1;
    let denom = 1;
    
    for(let i=0; i<share; i++) {
        numer *= (balls - i);
        denom *= (share - i);
    }
    
    return numer / denom;
}

/*
//처음 풀이
function solution(balls, share) {
    const factorial = (n)=> Array.from({length: n}, (_, i)=> n - i).reduce((a, c)=> a * c, 1);
    return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)));
}
*/

/*
//재귀 함수 이용
function solution(balls, share) {
    const factorial = (n)=> n > 0 ? n * factorial(n - 1) : 1;
    return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)));
}
*/