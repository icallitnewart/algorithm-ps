function solution(s, n) {
    return s.split('')
            .map((str, i)=> {
                if(str === ' ') return str;
                let newCharCode = s.charCodeAt(i) + n;
                if(newCharCode > 122) {
                    newCharCode -= 122 - 97 + 1;
                }
                if(str.toUpperCase() === str && newCharCode > 90) {
                    newCharCode -= 90 - 65 + 1;
                } 
                return String.fromCharCode(newCharCode);
            })
            .join('');
}