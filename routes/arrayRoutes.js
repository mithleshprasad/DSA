const express = require("express");
const router = express.Router();
const { getArray, getArraySum} = require("../controller/arrayController");
const { getArrayQuestion } = require("../controller/arrayController");

router.get("/array", getArray);
router.get("/arraySum", getArraySum);
router.post("/arrayQuestion",getArrayQuestion);

module.exports = router;
