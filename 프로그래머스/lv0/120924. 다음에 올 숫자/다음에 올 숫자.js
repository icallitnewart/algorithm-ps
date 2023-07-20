function solution(common) {
    const [_, ...arith] = common.map((num, i)=> (i>0) ? num - common[i-1] : 0);
    const isArithmetic = arith.every((num, i)=> num === arith[0]);
    return isArithmetic 
            ? common[common.length - 1] + arith[0] 
            : common[common.length - 1] * (common[1] / common[0]);
}