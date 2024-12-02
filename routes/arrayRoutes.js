const express = require("express");
const router = express.Router();
const { getArray, getArraySum } = require("../controller/arrayController");

router.get("/array", getArray);
router.get("/arraySum", getArraySum);

module.exports = router;
