function solution(myString, pat) {
    for(let i=myString.length; i>=0; i--) {
        const cutStr = myString.substring(0, i);
        if(cutStr.endsWith(pat)) return cutStr;
    }
}