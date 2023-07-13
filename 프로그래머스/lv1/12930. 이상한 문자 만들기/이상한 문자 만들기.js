function solution(s) {
    const words = s.split(' ');
    words.forEach((word, i)=> {
        words[i] = word.split('')
                        .map((str, idx)=> (idx + 1) % 2 > 0 ? str.toUpperCase() : str.toLowerCase())
                        .join('');
    });
    return words.join(' ');
}