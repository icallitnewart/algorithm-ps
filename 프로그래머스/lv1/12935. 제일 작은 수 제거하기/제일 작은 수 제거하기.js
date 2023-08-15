function solution(arr) {
    const nums = arr.filter((n)=> n !== Math.min(...arr));
    return nums.length === 0 ? [-1] : nums;
}