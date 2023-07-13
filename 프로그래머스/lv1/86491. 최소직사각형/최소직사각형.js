function solution(sizes) {
    const arr = sizes.map(([w,h])=> w > h ? [w, h] : [h, w]);
    const maxWidth = [...arr].sort(([w1, h1], [w2, h2])=> w2 - w1)[0][0];
    const maxHeight = [...arr].sort(([w1, h1], [w2, h2])=> h2 - h1)[0][1];
    return maxWidth * maxHeight;
}