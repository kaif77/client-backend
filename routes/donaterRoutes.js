const express = require("express");
const router = express.Router();
const { createNewDoner } = require("../controllers/donaterController");
// create donater routes
router.post("/create", createNewDoner);

module.exports = router;
