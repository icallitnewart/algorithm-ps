function solution(phone_number) {
    var answer = '';
    var len = phone_number.length;
    var last4Digits = phone_number.substr(len - 4, len);
    var restOfDigits = phone_number.substr(0, len - 4); 
    var asterisk = restOfDigits.replace(/[0-9]/gi, '*');

    answer = asterisk + last4Digits;
    
    return answer;
}