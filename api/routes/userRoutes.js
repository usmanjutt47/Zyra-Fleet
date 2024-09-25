const express = require("express");
const {
  registerUser,
  loginUser,
  sendOTP,
  verifyOTP,
  changePassword,
} = require("../controllers/userController");
const {
  createEntry,
  getEntries,
} = require("../controllers/TruckEntryController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);
router.post("/change-password", changePassword);

router.post("/truck-entry", createEntry);
router.get("/truck-entry/:userId", getEntries);

module.exports = router;
