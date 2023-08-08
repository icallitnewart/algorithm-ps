function solution(array) {
    const counts = {};
    let maxCount = 0;
    let mostFrequent;
    
    array.forEach((num)=> {
        counts[num] = (counts[num] || 0) + 1;
        if(counts[num] > maxCount) {
            maxCount = counts[num];
            mostFrequent = num;
        }
    });
    
    return Object.values(counts).filter(count=> count === maxCount).length > 1 ? -1 : mostFrequent;
}