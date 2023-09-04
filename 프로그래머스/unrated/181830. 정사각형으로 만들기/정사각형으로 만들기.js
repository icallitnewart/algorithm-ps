function solution(arr) {
    const column = arr.length;
    const row = arr[0].length;
    
    if(column > row) {
        for(let i=0; i<column; i++) {
            for(let j=0; j<column-row; j++) {
                arr[i].push(0);
            }
        }
    } else {
        for(let j=0; j<row-column; j++) {
            arr.push(new Array(row).fill(0));
        }
    }
    
    return arr;
}