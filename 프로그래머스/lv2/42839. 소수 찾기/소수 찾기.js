function solution(numbers) {
    let answer = 0;
    const newNumbers = new Set();
    
    //소수 여부 판단
    const isPrime = (n)=> {
        if(n < 2) return false;
        for(let i=2; i*i<=n; i++) if(n % i === 0) return false;
        return true;
    };
    
    //가능한 모든 숫자 조합 구하기
    const getPermutation = (permutation, rests)=> {
        //만든 숫자 추가
        if(permutation.length) {
            const num = Number(permutation.join(''));
            newNumbers.add(num);
        }
        //함수 종료 조건
        if(!rests.length) return;
        
        //선택된 숫자(n)을 기점으로 두 부분으로 나눈다
        rests.forEach((n, i)=> {
            const rest = [...rests.slice(0, i), ...rests.slice(i+1)];
            getPermutation([...permutation, n], rest);
        });
    };
    
    getPermutation([], numbers.split(''));
    for(const num of newNumbers) if(isPrime(num)) answer++;
    
    return answer;
}