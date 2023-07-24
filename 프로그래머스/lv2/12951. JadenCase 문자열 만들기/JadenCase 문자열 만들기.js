function solution(s) {
    return s.split(' ')
            .map((word, i)=> {
                let [first, ...rest] = word;
                if(isNaN(first)) first = first ? first.toUpperCase() : first;
                rest = rest.map(v=> v.toLowerCase());
                return [first, ...rest].join('');
            })
            .join(' ');
}