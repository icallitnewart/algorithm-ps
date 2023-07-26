function solution(people, limit) {
    people.sort((a, b)=> b - a);
    
    let boat = 0;
    let end = people.length - 1;
    for(let start=0; start<=end; start++) {
        if(people[start] + people[end] <= limit) end--;
        boat++;
    }
    
    return boat;
}