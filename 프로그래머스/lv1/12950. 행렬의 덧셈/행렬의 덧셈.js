function solution(arr1, arr2) {
    return arr1.map((c1, i)=> {
        const c2 = arr2[i];
        return c1.map((r1, idx)=> {
            const r2 = c2[idx];
            return r1 + r2;
        })
    });
}