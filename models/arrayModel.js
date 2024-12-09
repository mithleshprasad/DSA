const mongoose = require('mongoose');

exports.reverseArray = (arr) => {
    return [...arr].reverse();
};

exports.getArraySum = (arr) => {
    return arr.reduce((acc, a) => acc + a, 0);
};

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
  
  module.exports = mongoose.model('getArrayQuestion', ArraySchema);
