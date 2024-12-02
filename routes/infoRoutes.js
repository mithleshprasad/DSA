const express = require("express");
const router = express.Router();
const { getInfo } = require("../controller/infoController");

router.get("/", getInfo);

module.exports = router;
