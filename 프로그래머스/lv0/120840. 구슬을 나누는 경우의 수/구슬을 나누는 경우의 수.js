function solution(balls, share) {
    const factorial = (n)=> Array.from({length: n}, (_, i)=> n - i).reduce((a, c)=> a * c, 1);
    return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)));
}