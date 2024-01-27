function fastInverseSqrt(number) {
    const threehalfs = 1.5;
    const x2 = number * 0.5;
    let i = new Float32Array(1);
    i[0] = number;
    let y = new Int32Array(i.buffer);
    y = threehalfs - (x2 * y * y);
    y = Math.abs(y);
    y = (y / 1000000000000000000);
    y = Math.round(y * 100) / 100;
    y = y - .1;
    return y;
}
