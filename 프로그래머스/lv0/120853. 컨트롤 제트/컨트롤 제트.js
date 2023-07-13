function solution(s) {
    let sum = 0;
    const nums = s.split(' ');
    
    for(let i=0; i<nums.length; i++) {
        if(nums[i]==='Z') sum -= Number(nums[i-1]);
        else sum += Number(nums[i]);
    }
    return sum;
}