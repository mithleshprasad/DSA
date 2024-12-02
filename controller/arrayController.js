const { getArraySum, reverseArray } = require("../models/arrayModel");

exports.getArray = (req, res) => {
    const arr = [1, 2, 3, 4, 5, 6];
    const reversedArr = reverseArray(arr);
    res.json({
        status: true,
        array: `Originally array: ${arr} <br> Reversed array: ${reversedArr}`,
    });
};

exports.getArraySum = (req, res) => {
    const arr = [1, 2, 3, 4, 5, 6];
    const sumArr = getArraySum(arr);
    res.json({
        status: true,
        array: `Originally array: ${arr} <br> Sum of array: ${sumArr}`,
    });
};
