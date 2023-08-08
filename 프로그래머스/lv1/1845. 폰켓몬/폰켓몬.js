function solution(nums) {
    const maxType = [...new Set(nums)].length;
    const maxNum = nums.length / 2;
    return maxType > maxNum ? maxNum : maxType;
}