const express = require("express");
const router = express.Router();
const { getArray, getArraySumController, getArrayQuestion } = require("../controller/arrayController");

// Define routes
router.get("/array", getArray);
router.get("/arraySum", getArraySumController); // Adjusted function name for clarity
router.post("/arrayQuestion", getArrayQuestion);

// Export the router
module.exports = router;
