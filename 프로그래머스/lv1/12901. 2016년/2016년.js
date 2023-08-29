function solution(a, b) {
    const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const dates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const idx = dates.slice(0, a).reduce((acc, cur, i)=> i === a - 1 ? acc + b : acc + cur, 0);
    
    return days[(idx - 1) % 7];
}