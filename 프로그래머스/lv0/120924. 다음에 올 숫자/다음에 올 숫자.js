function solution(common) {
    const isArithmetic = common[1] - common[0] === common[2] - common[1];
    return isArithmetic 
            ? common[common.length - 1] + (common[1] - common[0])
            : common[common.length - 1] * (common[1] / common[0]);
}