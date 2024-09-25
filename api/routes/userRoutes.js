const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const { createEntry, getEntries } = require("../controllers/TruckEntryController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/truck-entry", createEntry);
router.get("/truck-entry/:userId", getEntries);

module.exports = router;
