function solution(n, words) {
    const arr = [];
    
    for(let i=0; i<words.length; i++) {
        const word = words[i];
        const lastWord = arr[arr.length - 1];
        
        if((arr.length > 0 && lastWord[lastWord.length - 1] !== word[0]) || arr.includes(word)) {
            const person = (i + 1) % n === 0 ? n : (i + 1) % n;
            const turn = Math.ceil((i + 1) / n);
            return [person, turn];
        }
        
        arr.push(word);
    }
    
    if(arr.length === words.length) return [0, 0];
}