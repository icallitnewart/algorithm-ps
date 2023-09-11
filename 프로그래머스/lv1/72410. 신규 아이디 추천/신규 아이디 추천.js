function solution(new_id) {
    //1단계: 모든 대문자 소문자로 치환
    const changeUpperCase = (id)=> id.toLowerCase();

    //2단계: 불필요한 문자 제거 (알파벳 소문자, 숫자, 빼기, 밑줄, 마침표만 허용) 
    const filterString = (id)=> id.replace(/[^a-z0-9-_.]/g, '');

    //3단계: 연속된 마침표 한개로 변경
    const removeConsecutivePeriods = (id)=> {
        return id.split('').reduce((a, c, i)=> ((c === '.' && id[i+1] === '.') ? a : a + c), '');
    }

    //4단계: 처음이나 끝에 위치한 마침표 제거
    const checkPeriodLocation = (id)=> {
        if(id.startsWith('.')) id = id.substring(1);
        if(id.endsWith('.')) id = id.substring(0, id.length - 1);
        return id;
    };

    //5단계: 빈 문자열 'a' 대입
    const fillBlank = (id)=> (id || 'a');

    //6단계: 15개의 문자를 제외한 나머지 문자들 제거
    const shortenLength = (id)=> {
        id = id.substring(0, 15);
        if(id.endsWith('.')) id = id.substring(0, id.length - 1);
        return id;
    };

    //7단계: 2자 이하라면 마지막 문자를 길이가 3이 될 때까지 반복
    const stretchLength = (id)=> {
        const len = id.length;
        if(len <= 2) for(let i=len; i<3; i++) id += id[len - 1];
        return id;
    };
    
    new_id = changeUpperCase(new_id);
    new_id = filterString(new_id);
    new_id = removeConsecutivePeriods(new_id);
    new_id = checkPeriodLocation(new_id);
    new_id = fillBlank(new_id);
    new_id = shortenLength(new_id);
    new_id = stretchLength(new_id);
    
    return new_id;
}