function solution(s) {
    const str = s.split('');
    return str.map((letter, i)=> {
        const prevLetters = str.slice(0, i);
        const index = prevLetters.lastIndexOf(letter);
        return index > -1 ? prevLetters.length - index : -1;
    });
}