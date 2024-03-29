const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0]; 
    const letters = str.split('');
    const isUpperCase = (v)=> v === v.toUpperCase();
    const transformed = letters.map(v=> isUpperCase(v) ? v.toLowerCase() : v.toUpperCase());

    console.log(transformed.join(''));
});