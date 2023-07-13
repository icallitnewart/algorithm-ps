function solution(emergency) {
    const ranks = [...emergency].sort((a,b)=> b - a);
    return emergency.map(num=> ranks.indexOf(num) + 1);
}