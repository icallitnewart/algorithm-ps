function solution(n, lost, reserve) {
    let answer = 0;
    const availableReserve = reserve.filter(v=> !lost.includes(v));
    
    for(let i=1; i<=n; i++) {
        const isLost = lost.includes(i);
        
        //체육복 잃어버린 경우
        if(isLost) {
            //여분의 체육복을 갖고 있는 경우
            const hasReserve = reserve.indexOf(i);
            if(hasReserve >= 0) {
                reserve.splice(hasReserve, 1);
                answer++;
            } else {    //여분의 체육복이 없는 경우
                const prevReserve = availableReserve.indexOf(i-1);
                if(prevReserve >= 0) {
                    availableReserve.splice(prevReserve, 1);
                    answer++;
                } else {
                    const nextReserve = availableReserve.indexOf(i+1);
                    if(nextReserve >= 0) {
                        availableReserve.splice(nextReserve, 1);
                        answer++;
                    }
                }
            }
        } else answer++;
    }
    
    return answer;
}