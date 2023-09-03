function solution(rank, attendance) {
    const students = rank.map((r, i)=> ({[i]: r}));    
    const filtered = students.filter((_, i)=> attendance[i]);
    const [a, b, c] = filtered.sort((a, b)=> Object.values(a) - Object.values(b)).slice(0, 3).map(v=> Number(Object.keys(v)));
    return 10000 * a + 100 * b + c;
}