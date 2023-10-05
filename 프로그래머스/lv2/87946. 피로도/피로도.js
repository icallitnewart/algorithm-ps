function solution(k, dungeons) {
    const arr = [];
    const getPermutation = (permutation, rests)=> {
        if(!rests.length) arr.push(permutation);
        
        rests.forEach((v, i)=> {
            const rest = [...rests.slice(0, i), ...rests.slice(i+1)];
            getPermutation([...permutation, v], rest);
        });
    }
    getPermutation([], dungeons);
    
    
    let answer = 0;
    for(let i=0; i<arr.length; i++) {
        let stamina = k;
        let count = 0;
        
        for(let j=0; j<arr[i].length; j++) {
            const [requirement, cost] = arr[i][j];
            
            if(stamina < requirement || stamina < cost) break;
            else {
                stamina -= cost;
                count++;
            }
        }
        
        if(count > answer) answer = count;
    }
    
    return answer;
}