function solution(phone_book) {
    phone_book.sort();
    
    for(let i=0; i<phone_book.length; i++) {
        if(phone_book[i].startsWith(phone_book[i-1])) {
            return false;
            break;
        }
    }
    return true;
}