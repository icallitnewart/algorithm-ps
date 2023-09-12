function solution(my_string) {
    const arr = new Array(52).fill(0);
    return arr.map((n, i)=> {
        const idx = i < 26 ? i + 65 : i + 97 - 26;
        const str = String.fromCharCode(idx);
        return my_string.split('').filter(s=> s === str).length;
    })
}