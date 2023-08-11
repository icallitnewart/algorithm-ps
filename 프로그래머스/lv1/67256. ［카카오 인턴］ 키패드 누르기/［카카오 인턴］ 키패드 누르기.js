function solution(numbers, hand) {
    let answer = '';
    let left = '*';
    let right = '#';
    const keys = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        '*': [3, 0],
        0: [3, 1],
        '#': [3, 2]
    }
    
    for(let n of numbers) {
        if('147'.includes(n)) {
            answer += 'L';
            left = n;
        }
        else if('369'.includes(n)) {
            answer += 'R';
            right = n;
        }
        else {
            const pos = keys[n];
            const disL = Math.abs(pos[0] - keys[left][0]) + Math.abs(pos[1] - keys[left][1]);
            const disR = Math.abs(pos[0] - keys[right][0]) + Math.abs(pos[1] - keys[right][1]);
            
            if(disL < disR) {
                answer += 'L';
                left = n;
            } else if (disL > disR) {
                answer += 'R';
                right = n;
            } else {
                const whichHand = hand[0].toUpperCase();
                answer += whichHand;
                whichHand === 'L' ? left = n : right = n;
            }
        }
    }
    
    
    return answer;
}