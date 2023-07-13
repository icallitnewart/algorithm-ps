function solution(n, arr1, arr2) {
    let secretMap = [];
    const convertMap = (arr)=> arr.map(num=> num.toString(2).padStart(n, '0'));
    
    convertMap(arr1).forEach((line1, idx)=> {
        let newLine = '';
        const line2 = convertMap(arr2)[idx];
        for(let i=0; i<n; i++) {
            if(line1[i] === '1' || line2[i] === '1') newLine += '#';
            else newLine += ' ';
        }
        secretMap.push(newLine);
    });
    return secretMap;
}