function solution(q, r, code) {
    return code.split('').reduce((a, c, i)=> (i % q === r) ? a + c : a, ''); 
}