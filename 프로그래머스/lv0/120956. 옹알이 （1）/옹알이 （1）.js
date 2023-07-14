function solution(babbling) {
    let answer = 0;
    const words = ['aya', 'ye', 'woo', 'ma'];
    
    babbling.forEach(str=> {
        let babble = str;
        while(babble) {
            const prevBabble = babble;
            for(let word of words) {
                if(babble.startsWith(word)) {
                    babble = babble.replace(word, '');
                }
            }
            
            if(babble === prevBabble) break;
        }
        
        if(!babble) answer++;
    });
    
    return answer;
}