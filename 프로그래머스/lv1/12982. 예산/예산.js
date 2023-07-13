function solution(d, budget) {
    let sum = 0;
    return d.sort((a, b)=> a - b)
            .filter(price=> {
                const cond = budget >= sum + price;
                if(cond) {
                    sum += price;
                    return cond;
                }
            })
            .length;
}