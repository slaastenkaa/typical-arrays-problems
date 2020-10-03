exports.min = function min(array) {
    return Math.min.apply(null, array);

}

exports.max = function max(array) {
    return Math.max.apply(null, array);

}

exports.avg = function avg(array) {
    let a = array.reduce((a, b) => a + b);
    let b = a / array.length;
    return b;

}
