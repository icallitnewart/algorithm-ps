function solution(clothes) {
    const hash = new Map();
    for(let i=0; i<clothes.length; i++) {
        const [name, kind] = clothes[i];
        hash.set(kind, (hash.get(kind) || 0) + 1);
    }
    
    let answer = 1;
    for(let count of hash.values()) answer *= count + 1;
    
    return answer - 1;
}