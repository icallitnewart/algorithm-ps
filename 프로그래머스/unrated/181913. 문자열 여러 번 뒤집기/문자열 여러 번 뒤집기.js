function solution(my_string, queries) {
    let str = [...my_string];
    for(let query of queries) {
        const [start, end] = query;
        const first = str.slice(0, start);
        const middle = str.slice(start, end + 1).reverse();
        const last = str.slice(end + 1, str.length);
        str = [...first, ...middle, ...last];
    }
    
    return str.join('');
}