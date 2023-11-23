//wow.
function fastInvSqrt(x) {
    var xhalf = 0.5 * x;
    var i = x;
    i = i * (1.5 - xhalf * i * i);
    i = i * (1.5 - xhalf * i * i);
    return i;
}
