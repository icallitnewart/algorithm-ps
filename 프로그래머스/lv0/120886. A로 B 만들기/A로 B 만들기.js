function solution(before, after) {
    [...before].forEach(str=> {
        after = after.replace(str, '');
    });
    
    return after ? 0 : 1;
}