function solution(str1, str2) {
    return str1.split('').reduce((a, c, i)=> a + c + str2[i], '');
}