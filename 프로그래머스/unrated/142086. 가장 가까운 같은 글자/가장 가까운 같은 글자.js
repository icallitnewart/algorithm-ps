function solution(s) {
    const str = s.split('');
    return str.map((letter, i)=> {
        const prevLetters = str.slice(0, i).reverse();
        const index = prevLetters.indexOf(letter);
        return index > -1 ? index + 1 : index;
    });
}