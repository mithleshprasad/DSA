exports.reverseArray = (arr) => {
    return [...arr].reverse();
};

exports.getArraySum = (arr) => {
    return arr.reduce((acc, a) => acc + a, 0);
};
