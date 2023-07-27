function solution(n) {
    let num = n + 1;
    const getOnes = (v)=> v.toString(2).split('').filter(v=> v === '1').length;
    while(num) {
        if(getOnes(num) === getOnes(n)) break;
        else num++;
    }
    
    return num;
}