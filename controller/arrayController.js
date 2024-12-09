const { reverseArray, getArraySum } = require("../models/arrayModel");
const ArrayModel = require("../models/arrayModel");

// Reverse Array Example
exports.getArray = (req, res) => {
    const arr = [1, 2, 3, 4, 5, 6];
    const reversedArr = reverseArray(arr);
    res.json({
        status: true,
        array: {
            original: arr,
            reversed: reversedArr,
        },
    });
};

// Sum Array Example
exports.getArraySumController = (req, res) => {
    const arr = [1, 2, 3, 4, 5, 6];
    const sumArr = getArraySum(arr);
    res.json({
        status: true,
        array: {
            original: arr,
            sum: sumArr,
        },
    });
};

// Create Array Question
exports.getArrayQuestion = async (req, res) => {
    try {
        const { question, description, code } = req.body;

        if (!question || !description || !code) {
            return res.status(400).json({
                message: "All fields (question, description, code) are required",
            });
        }

        // Create a new document
        const newArrayQuestion = new ArrayModel({
            question,
            description,
            code,
        });

        // Save the document in the database
        const savedArrayQuestion = await newArrayQuestion.save();

        res.status(201).json({
            message: "Array question created successfully",
            data: savedArrayQuestion,
        });
    } catch (error) {
        console.error("Error saving array question:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
