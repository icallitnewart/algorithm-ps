function solution(s){
    const countStr = (str)=> s.split('').filter(v=> v.toLowerCase() === str).length;
    return countStr('p') === countStr('y');
}