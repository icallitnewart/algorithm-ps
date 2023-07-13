function solution(dots) {
    const [width1, width2] = dots.filter(dot=> dot[1] === dots[0][1]);
    const [height1, height2] = dots.filter(dot=> dot[0] === dots[0][0]);
    const width = width1[0] - width2[0];
    const height = height1[1] - height2[1];
    
    return Math.abs(width * height);
}