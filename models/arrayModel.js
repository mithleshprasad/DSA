const mongoose = require('mongoose');

// Utility functions
exports.reverseArray = (arr) => {
    return [...arr].reverse();
};

exports.getArraySum = (arr) => {
    return arr.reduce((acc, a) => acc + a, 0);
};

// Schema definition
const ArraySchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
});

// Export the model
const ArrayQuestion = mongoose.model('ArrayQuestion', ArraySchema);
module.exports = ArrayQuestion;
