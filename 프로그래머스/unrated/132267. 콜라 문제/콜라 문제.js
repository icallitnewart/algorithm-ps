function solution(a, b, n) {
    let bottles = n;
    let newBottles = 0;
    while(bottles >= a) {
        bottles -= a;
        bottles += b;
        newBottles += b;
    }
    
    return newBottles;
}