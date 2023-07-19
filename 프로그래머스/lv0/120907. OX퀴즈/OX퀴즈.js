function solution(quiz) {
    return quiz.map(eq=> {
        const [q, a] = eq.split('=');
        return (eval(q) === Number(a)) ? 'O' : 'X';
    });
}