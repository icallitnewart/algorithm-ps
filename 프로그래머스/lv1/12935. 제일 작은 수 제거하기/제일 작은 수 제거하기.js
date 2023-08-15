function solution(arr) {
    const nums = arr.filter((_, i)=> i !== arr.indexOf(Math.min(...arr)));
    return nums.length === 0 ? [-1] : nums;
}