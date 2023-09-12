function solution(numbers) {
    const eng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

    for(const n of eng) {
        numbers = numbers.replaceAll(n, eng.indexOf(n));
    }
    
    return +numbers;
}