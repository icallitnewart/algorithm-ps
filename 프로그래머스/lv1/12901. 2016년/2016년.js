function solution(a, b) {
    const getNum = (n)=> n < 10 ? '0' + n: n;
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const idx = new Date(`2016-${getNum(a)}-${getNum(b)}`).getDay();
    return days[idx];
}