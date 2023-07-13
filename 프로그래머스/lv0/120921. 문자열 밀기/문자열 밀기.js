function solution(A, B) {
    const cases = [];
    for(let i=0; i<A.length; i++) {
        const first = A.substring(A.length, A.length - i);
        const second = A.substring(0, A.length - i);
        cases.push(first + second);
    }
    return cases.indexOf(B);
}
