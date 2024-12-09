const { getArraySum, reverseArray } = require("../models/arrayModel");
const arrayModel = require("../models/arrayModel");

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

exports.getArrayQuestion = async (req, res) => {
    try {
      const { question, description, code } = req.body;
  
      if (!question) {
        return res.status(400).json({ message: "Question is required" });
      }
      if (!description) {
        return res.status(400).json({ message: "Description is required" });
      }
      if (!code) {
        return res.status(400).json({ message: "Code is required" });
      }
  
      // Create a new document
      const newArrayQuestion = new ArrayModel({
        question,
        description,
        code,
      });
  
      // Save the document in the database
      const savedArrayQuestion = await newArrayQuestion.save();
      await arrayModel.save();

      res.status(201).json({
        message: "Array question created successfully",
        data: savedArrayQuestion,
      });
    } catch (error) {
      console.error("Error saving array question:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  



