function solution(s) {
    const eng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    
    eng.forEach((word, idx)=> s = s.replaceAll(word, idx));
    return Number(s);
}