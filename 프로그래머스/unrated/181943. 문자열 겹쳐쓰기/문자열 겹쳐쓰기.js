function solution(my_string, overwrite_string, s) {
    return my_string.split('')
                    .map((str, i)=> (i >= s && i < s + overwrite_string.length) ? overwrite_string[i - s] : str)
                    .join('')
}