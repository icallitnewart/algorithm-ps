function solution(phone_book) {
    phone_book.sort();    
    return !phone_book.some((n, i)=> n.startsWith(phone_book[i-1]));
}